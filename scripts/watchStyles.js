const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const postcss = require('postcss');
const transform = require('css-to-react-native').default;

const NAME = 'styles';
const OPTIONS = { recursive: true };

function ignore(inPath) {
    if (fs.existsSync(inPath)) {
        const stats = fs.statSync(inPath);
        return stats.isFile() && !inPath.endsWith('.css');
    }
    return false;
}

function split(inPath) {
    const parts = inPath.split(path.sep);
    if (path.isAbsolute(inPath)) {
        const basePath = path.resolve('.');
        const baseParts = basePath.split(path.sep);
        parts.splice(0, baseParts.length);
    }
    parts.splice(0, 1, NAME);
    return parts;
}

function replace(inPath) {
    const parts = split(inPath);
    const inName = parts.pop();
    const outName = `${inName.slice(0, -3)}json`;
    parts.push(outName);
    return parts.join(path.sep);
}

function convert(inPath, outPath) {
    const css = fs.readFileSync(inPath);
    let root;
    try {
        root = postcss.parse(css);
    } catch (error) {
        console.error(error);
        return;
    }
    const styles = {};
    for (const block of root.nodes) {
        if (block instanceof postcss.Container) {
            const props = [];
            for (const item of block.nodes) {
                if (item instanceof postcss.Declaration) {
                    props.push([item.prop, item.value]);
                }
            }
            try {
                styles[block.selector] = transform(props);
            } catch (error) {
                console.error(error);
                return;
            }
        }
    }
    const data = JSON.stringify(styles, null, 2);
    fs.writeFileSync(outPath, data);
}

if (fs.existsSync(NAME)) {
    fs.rmdirSync(NAME, OPTIONS);
}

chokidar.watch('css', { ignored: ignore, awaitWriteFinish: true })
    .on('add', (inPath) => {
        console.log(`Added ${inPath}`);
        const outPath = replace(inPath);
        const outDir = path.dirname(outPath);
        fs.mkdirSync(outDir, OPTIONS);
        convert(inPath, outPath);
    })
    .on('change', (inPath) => {
        console.log(`Changed ${inPath}`);
        const outPath = replace(inPath);
        convert(inPath, outPath);
    })
    .on('unlink', (inPath) => {
        console.log(`Removed ${inPath}`);
        const outPath = replace(inPath);
        if (fs.existsSync(outPath)) {
            fs.rmSync(outPath);
        }
        let outDir = path.dirname(outPath);
        while (fs.readdirSync(outDir).length === 0) {
            if (fs.existsSync(outDir)) {
                fs.rmdirSync(outDir);
            }
            outDir = path.dirname(outDir);
        }
    })
    .on('unlinkDir', (inDir) => {
        console.log(`Removed ${inDir}`);
        const paths = split(inDir);
        const outDir = paths.join(path.sep);
        if (fs.existsSync(outDir)) {
            fs.rmdirSync(outDir, OPTIONS);
        }
    });

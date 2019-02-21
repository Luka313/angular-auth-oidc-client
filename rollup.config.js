import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/router': 'ng.router',
    '@angular/common/http': 'ng.common.http',
    rxjs: 'rxjs',
    'rxjs/operators': 'rxjs.operators',
    'integrator-jsrsasign': 'integrator.jsrsasign',
    buffer: 'buffer',
};

export default {
    external: Object.keys(globals),
    plugins: [resolve(), sourcemaps()],
    onwarn: () => {
        return;
    },
    output: {
        format: 'umd',
        name: 'ng.integratorAngularAuthOidcClient',
        globals: globals,
        sourcemap: true,
        exports: 'named',
        amd: { id: 'angular-library-starter' },
    },
    plugins: [
        resolve(),
        commonjs({
            namedExports: {
                'node_modules/integrator-jsrsasign/lib/integrator-jsrsasign.js': ['KJUR', 'KEYUTIL', 'hextob64u'],
            },
        }),
    ],
};

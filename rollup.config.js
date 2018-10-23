import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/router': 'ng.router',
    '@angular/common/http': 'ng.common.http',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/operators': 'Rx.Observable.prototype',
    'rxjs/observable/timer': 'Rx.Observable.prototype',

    'integrator-jsrsasign': 'integrator.jsrsasign',
    buffer: 'buffer',
};

export default {
    entry: './dist/modules/integrator-angular-auth-oidc-client.es5.js',
    dest: './dist/bundles/integrator-angular-auth-oidc-client.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.integratorAngularAuthOidcClient',
    plugins: [
        resolve(),
        commonjs({
            namedExports: {
                'node_modules/integrator-jsrsasign/lib/integrator-jsrsasign.js': ['KJUR', 'KEYUTIL', 'hextob64u']
            }
        })
    ],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => {
        return;
    }
};

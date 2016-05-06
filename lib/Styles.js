'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    base: {
        borderRadius: '0 4px 4px 0',
        fontFamily: 'sans-serif',
        background: '#05B2D2',
        color: '#fff',
        padding: '1em',
        position: 'fixed',
        minWidth: '5em',
        textAlign: 'center',
        transition: '.5s cubic-bezier(0.85 ,0.02 ,0.4 ,1.1)',
        opacity: 0,
        left: 0,
        transform: 'translateX(-100%)',
        cursor: 'pointer'
    },

    baseTopOffset: {
        top: '1em'
    },

    baseBottomOffset: {
        bottom: '1em'
    },

    fullWidth: {
        width: '100%',
        transform: 'translateY(-100%)',
        left: 0,
        top: 0,
        background: '#05B2D2',
        color: '#fff',
        transition: '.5s cubic-bezier(0.85 ,0.05 ,0.4 ,1.1)',
        opacity: 0,
        cursor: 'pointer',
        position: 'fixed',
        textAlign: 'center',
        padding: '1em'
    },

    baseActive: {
        top: '1em',
        transform: 'translateX(0)',
        opacity: 1
    },

    baseAtBottomActive: {
        bottom: '1em',
        opacity: 1,
        transform: 'translateX(0)'
    },

    fullWidthActive: {
        transform: 'translateY(0)',
        opacity: 1
    }
};
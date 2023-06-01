export const generateTypescriptConfig = (): string => {
    return `{
    "compilerOptions": {
        "target": "es5",
        "jsx": "react",
        "module": "commonjs",
        "declaration": true,
        "outDir": "./lib",
        "lib": [
            "ES2015"
        ],
        "strict": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "esModuleInterop": true,
        "resolveJsonModule": true
    },
    "include": [
        "./src"
    ],
    "exclude": [
        "node_modules",
        "**/__tests__/*",
    ]
}
`;
};

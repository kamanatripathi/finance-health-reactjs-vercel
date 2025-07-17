import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { fileURLToPath } from 'url';
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default defineConfig({

    
    plugins: [
        laravel({
            input: ['resources/css/app.css' ,'resources/css' , 'resources/css/color.scss', 'resources/js/app.tsx'],
            refresh: true,
        }),
    ],
        resolve: {
            alias: {
                // "@": path.resolve(__dirname, "./"),
    
              "@": path.resolve(__dirname, "./resources/js"),
     
    
            },
          },
          build: {
                commonjsOptions: {
                esmExternals: true,
                "lib": [
                    "ES2021.String",
                ]
          },
          rollupOptions: {
            input: 'resources/css/app.css',
            },
        }
        
});



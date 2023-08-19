# Namaste React

# Parcel
- It creates dev build
- It creates local server
- It also does HMR: Hot module replacement
- It uses file watching algorithm written in c++
- It also used caching to give next builds faster. It maintains .parcel-cache folder in our application
- It also does image optimization
- Minification (prod build)
- Bundling (prod build)
- Compression (prod build)
- Consistent hashing
- Code splitting
- Differential bundling: to support all type of browsers(old browsers)
- Diagnostic (show error to you in your terminal)
- Error handling
- It can provide https server also: npx parcel index.html --https
- Tree shaking: remove unsed code/files while bundling/minifying
- It creates different build for dev and prod(more minified & takes more time to build)
- For prod build use command: npm parcel build index.html



# Food Ordering App wireframe
- Header
    -logo
    -nav
    -cart
-Body
    -search bar
    -restruarant container
        -restruarant cards
-Footer
    -copyright
    -address
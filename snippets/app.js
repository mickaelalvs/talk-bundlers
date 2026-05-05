// app.js
export function createApp() {
  return {
    plugins: [],
    use(plugin) { this.plugins.push(plugin) },
    mount(selector) { /* ... */ }
  }
}

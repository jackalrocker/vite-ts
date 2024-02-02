// vite.config.ts
import { defineConfig, loadEnv } from "file:///media/daniel/Daten1/Projects/web/vite-ts/.yarn/__virtual__/vite-virtual-65e775ecd6/7/home/daniel/.yarn/berry/cache/vite-npm-5.0.12-37f95c18d1-10c0.zip/node_modules/vite/dist/node/index.js";
import relay from "file:///media/daniel/Daten1/Projects/web/vite-ts/.yarn/__virtual__/vite-plugin-relay-virtual-294de87eaa/7/home/daniel/.yarn/berry/cache/vite-plugin-relay-npm-2.1.0-7f32af254f-10c0.zip/node_modules/vite-plugin-relay/dist/plugin.js";
import react from "file:///media/daniel/Daten1/Projects/web/vite-ts/.yarn/__virtual__/@vitejs-plugin-react-swc-virtual-c34ee741ef/7/home/daniel/.yarn/berry/cache/@vitejs-plugin-react-swc-npm-3.6.0-18140d7bb7-10c0.zip/node_modules/@vitejs/plugin-react-swc/index.mjs";
import styleX from "file:///media/daniel/Daten1/Projects/web/vite-ts/.yarn/__virtual__/vite-plugin-stylex-virtual-60397c42d3/7/home/daniel/.yarn/berry/cache/vite-plugin-stylex-npm-0.5.0-26935a4e8f-10c0.zip/node_modules/vite-plugin-stylex/dist/index.mjs";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), styleX(), relay],
    server: {
      host: env.VITE_HOST
    }
    // resolve: {
    //   alias: [{ find: "@styled-system", replacement: path.resolve("styled-system") }],
    // },
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbWVkaWEvZGFuaWVsL0RhdGVuMS9Qcm9qZWN0cy93ZWIvdml0ZS10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21lZGlhL2RhbmllbC9EYXRlbjEvUHJvamVjdHMvd2ViL3ZpdGUtdHMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21lZGlhL2RhbmllbC9EYXRlbjEvUHJvamVjdHMvd2ViL3ZpdGUtdHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuLy8gaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHJlbGF5IGZyb20gXCJ2aXRlLXBsdWdpbi1yZWxheVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBzdHlsZVggZnJvbSBcInZpdGUtcGx1Z2luLXN0eWxleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgXCJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKSwgc3R5bGVYKCksIHJlbGF5XSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IGVudi5WSVRFX0hPU1QsXG4gICAgfSxcbiAgICAvLyByZXNvbHZlOiB7XG4gICAgLy8gICBhbGlhczogW3sgZmluZDogXCJAc3R5bGVkLXN5c3RlbVwiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFwic3R5bGVkLXN5c3RlbVwiKSB9XSxcbiAgICAvLyB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsY0FBYyxlQUFlO0FBR25WLE9BQU8sV0FBVztBQUNsQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZO0FBRW5CLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUUzQyxTQUFPO0FBQUEsSUFDTCxTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLO0FBQUEsSUFDbEMsUUFBUTtBQUFBLE1BQ04sTUFBTSxJQUFJO0FBQUEsSUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUY7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

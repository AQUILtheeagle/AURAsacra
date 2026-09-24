#!/usr/bin/env python3
"""
Aura Sacra — Local Lightweight HTTP Server
Starts a local server with proper MIME types for PWA / ES Modules.
Usage: python3 serve.py [port]
"""

import http.server
import socketserver
import sys
import webbrowser
import os

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SacredHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and PWA caching headers
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        self.send_header('Service-Worker-Allowed', '/')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def guess_type(self, path):
        # Ensure correct MIME type for ES modules and manifest
        if path.endswith('.js') or path.endswith('.mjs'):
            return 'application/javascript'
        if path.endswith('.json') or path.endswith('.webmanifest'):
            return 'application/json'
        if path.endswith('.css'):
            return 'text/css'
        return super().guess_type(path)

def run():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), SacredHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 60)
        print(f"🕊️  Aura Sacra — Universal Christian Platform")
        print(f"📍 Local Server Running at: {url}")
        print(f"⚙️  100% Offline PWA Ready (IndexedDB & Web Audio)")
        print("   Press Ctrl+C to stop the server.")
        print("=" * 60)
        if '--no-browser' not in sys.argv:
            try:
                webbrowser.open(url)
            except Exception:
                pass
        httpd.serve_forever()

if __name__ == '__main__':
    run()

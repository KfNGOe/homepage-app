#This script replaces the base href in the index.html file with a script to automatically set the base href
# Needed for gh actions

baseHref="<script>let slash = location.pathname.endsWith('/') ? '' : '/';document.write('<base href=\"' + location.pathname + slash + '\"/>');</script>"
# Replace the base href in the index.html file
sed -i "s|<base href=\"/\" />|$baseHref|g" ./Migration/homepage/src/build/resources/main/static/index.html

        
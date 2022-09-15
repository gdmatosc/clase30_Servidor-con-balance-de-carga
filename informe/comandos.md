# Configuración de distribución de instancia del servidor
pm2 start b0.server.js --name="Server Fork-APP Principal" --watch -- 8080
pm2 start b0.server.js --name="Server Cluster-APP Num random" --watch -i max -- 8081

# Comandos de apoyo PM2
pm2 list
pm2 delete all   
pm2 log

 
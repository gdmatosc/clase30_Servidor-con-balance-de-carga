p {
    include       mime.types;
    default_type  application/octet-stream;
	
	sendfile        on;
	keepalive_timeout  65;
	
	upstream node_app_principal {
		server 127.0.0.1:8080;
	}

	upstream node_app_num_random {
		server 127.0.0.1:8081;
	}

    server {
        listen       80;
		server_name  nginx_node;
		root C:\Users\GUILLERMO\Desktop\3.Conocimiento_tecnico_especializado\Desarrollo_Software\1.HTML_CSS_JS_TS_DB\3.S2.NodeJS_TypeScript_DB\NodeJS_Coderhouse\Parte2\Clases29-30\Clase30.desafio\public;

		location / {
			proxy_pass http://node_app_principal;
    			proxy_set_header Upgrade $http_upgrade;
    			proxy_set_header Connection "Upgrade";
		}

		location /apiOperaciones/numerosRandom/ {
			proxy_pass http://node_app_num_random;
 
		}
		
		
    }
# pruebasE2EDataPool
Repositorio para entrega Semana 7 pruebas automatizadas

## Integrantes del grupo
- Cristian Agudelo (c.agudeloh@uniandes.edu.co)
- David Hidalgo (d.hidalgo@uniandes.edu.co)
- Frank Candanoza (f.candanoza@uniandes.edu.co)

## Cypress

Usamos la herramienta Cypress para la realización de escenarios de prueba con generacipón de datos.

### Instalar Cypress
```
npm install -g cypress
```


## Aplicación bajo pruebas (Ghost)

### Instalar Ghost usando docker
Para el diseño y ejecución de estas pruebas, se utilizó Ghost .44 que ya tiene imagénes definidas en DockerHub. Con los siguientes comandos se podrían descargar y ejecutar el contenedor teniendo como requisito que debe existir docker instalado previamente en la máquina.

```
docker run -d  -e url=http://localhost:3003 -p 3003:2368 ghost:4.44.0
```

## Librerias adicionales

### Faker-js
Para generación de datos aleatorios


```
npm install @faker-js/faker --save-dev
```


## Estrategias a Usar

### Datapool Apriori

Es el que crea los datos antes de la ejecución de la prueba y estos hacen parte del diseño de la prueba,
plasma la pericia del diseñador de la prueba y la experiencia en casos limites e heuristicas implicitas.
Por lo general los datos son extraidos desde una base de datos o un archivo plano.

Tambien existen varias herramientas para generar pool de dats apriori, en el caso de esta prueba se uso la herramienta mockaroo
se puede encontrar mas información en https://www.mockaroo.com/


### Datapool no Apriori(pseudoaleatorio) 
Es el que genera los datos durante las pruebas diámicamente. 
Este no conserva una estructura predefinida, y tiene mayor variabilidad. Se pueden ir modificando. 

Para generar un datapool fijo a partir del cual los tutores puedan reproducir las pruebas con los mismos valores, se coloca una semilla.

En esta estrategia y teniendo en cuenta la generación de datos aleatorios se utliza la herramienta _faker-js_.


### Escenarios aleatorios



## Como correr las pruebas

### Datapool Apriori
```
cypress run --config-file cypress_ghost_pruebas_aleatorias_pool_apriori.json --headed --no-exit
```

### Datapool no Apriori(pseudoaleatorio) 
```
cypress run --headed --config-file cypress_ghost_4.44_pseudo_aleatorio.json
```



export default {
  global: {
    componenteFormativo: 'Almacenamiento y transporte interno',
    descripcionCurso:
      'Durante el desarrollo del ciclo de vida del producto químico, incluyendo sus etapas de manufactura, transporte, comercialización e incluso manipulación y uso, el almacenamiento y transporte interno corresponden a elementos fundamentales para la gestión adecuada y segura de los productos químicos. Por ello, es importante tener en cuenta orientaciones técnicas que garanticen el mantenimiento de un ambiente de trabajo seguro y, la implementación de medidas y controles que protejan a los trabajadores, a la comunidad y en general al medio ambiente de los peligros que presentan los productos utilizados.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Almacenamiento de los productos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Peligros y riesgos durante el almacenamiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Escalas de almacenamiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Condiciones de almacenamiento',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ingreso y salida de productos químicos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Manipulación de productos químicos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Trasvases',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Instalaciones de almacenamiento',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Portabotellas',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Equipamiento para emergencias',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Envases',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Clasificación según compatibilidades',
            hash: 't_1_11',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Transporte interno de los productos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Condiciones de seguridad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Peligros y riesgos en el traslado interno',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Marta Lucía Hernández',
        cargo: 'Instructora',
        centro: 'Centro Textil y de Gestión Industrial',
      },
      {
        nombre: 'Luis Eugenio Ramírez Duarte',
        cargo: 'Experto temático',
        centro: 'ONUDI',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['María Natalia', 'Maldonado Delgado'],
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Zuleidy María Ruiz Torres',
          'Wilson Andrés Arenales Cáceres',
          'Gilberto Junior Rodríguez Rodríguez',
          'Maria Carolina Tamayo',
          'Andrés Herrera',
          'Carlos Eduardo Garavito Parada',
        ],
        cargo: 'Producción audiovisual',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'ARP SURA. (s.f.). Almacenamiento seguro de sustancias químicas. (s.f). Centro de Información de Sustancias Químicas, Emergencias y Medio Ambiente - Cistema, p. 1-8.',
      link:
        'https://www.arlsura.com/files/almacenamiento_sustancias_quimicas.pdf',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad. (2000). Almacenamiento de sustancias químicas  y residuos peligrosos.',
      link:
        'http://www.ambientebogota.gov.co/documents/24732/3987253/Almnto%20de%20Sust.%20Qu%C3%ADmicas.pdf',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    },
    {
      referencia:
        'Gema pro, (2020). Memoria técnica de ventilación suspel/respel. [Archivo de video]. YouTube.',
      link: 'https://www.gemapro.cl/memoria-tecnica-ventilacion-suspel-respel/',
    },
    {
      referencia:
        'ICONTEC. (1998). Norma Técnica Colombiana NTC 2050. Código Eléctrico Colombiano.',
      link:
        'https://www.idrd.gov.co/sitio/idrd/sites/default/files/imagenes/ntc%2020500.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad e Higiene en el Trabajo. (2014). Almacenamiento de productos químicos. Orientaciones para la identificación de los requisitos de seguridad en el almacenamiento de productos químicos peligrosos. INSHT.',
      link:
        'https://www.insst.es/documents/94886/96076/Almacenamiento+de+productos+quimicos.pdf/87f75b14-b979-4745-8bb5-5f6cb7d49e53',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (sf). Guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos.',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/guias_ambientales_almacenam_transp_x_carretera_sust_quim_res_pelig.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (s.f.). Guías para manejo seguro y gestión ambiental de 25 sustancias químicas.',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/guia_25_sustancias.pdf',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (s.f). Reglamento Técnico de Instalaciones Eléctricas – RETIE.',
      link: 'https://www.minenergia.gov.co/retie',
    },
    {
      referencia:
        'Norte Minero TV. (2019). Manejo de sustancias químicas.   [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=ksrAt42TkCs',
    },
    {
      referencia:
        'Paba, P., Hernández, W., Carvajal, A., González, O. & Torres, J. (s.f.). Unidad 3. Gestión de inventarios, almacenes y aprovisionamiento. Informe sobre los conceptos de gestión de inventarios, almacenamientos y aprovisionamiento. UNAD.',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/19194/79514834.pdf?sequence=4&isAllowed=y',
    },
    {
      referencia:
        'Proyecto Higiene Química Universidad de Antioquia, (2019). Almacenamiento de productos químicos. [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=n8jok7B2Oog',
    },
    {
      referencia: 'SENA. (s.f.). Curso manejo de productos químicos. ',
    },
    {
      referencia:
        'SURA ARL. (s.f.).  ¿Qué es CISTEMA? Centro de Información de Sustancias Químicas, Emergencias y Medio Ambiente de ARL SURA.',
      link:
        'https://www.arlsura.com/index.php/44-cistema-/ique-es-cistema-/48-ique-es-cistema',
    },
    {
      referencia:
        'UNECE. (2015). Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA). Sexta edición revisada.  Naciones Unidas Nueva York y Ginebra.',
      link:
        'https://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev06/Spanish/ST-SG-AC10-30-Rev6sp.pdf',
    },
    {
      referencia:
        'Universidad Industrial de Santander. (2012). Protocolo de Seguridad Química. Manipulación segura de sustancias químicas.',
      link:
        'https://www.uis.edu.co/intranet/calidad/documentos/gestion_ambiental/protocolos/TTH.01.pdf',
    },
    {
      referencia:
        'Universidad Pública de Navarra.(s.f.). Manual de uso de productos químicos UPNA.',
      link:
        'http://www.unavarra.es/digitalAssets/146/146686_100000Manual-de-uso-de-productos-quimicos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'Es el acto de almacenar (custodiar) bienes que serán vendidos o distribuidos más tarde.',
    },
    {
      termino: 'Armarios de seguridad',
      significado:
        'Son gabinetes para guardar productos químicos, sustancias tóxicas, lacas, disolventes, pinturas, productos contaminantes o inflamables que tienen que estar protegidos, deben tener la máxima garantía de seguridad, ser efectivos y además, estar conformes con la legislación.',
    },
    {
      termino: 'Contenedores',
      significado:
        'Son gabinetes para el almacenamiento de productos químicos, es un almacén prefabricado específicamente para ello, cumpliendo con todos los requisitos necesarios que exige la normativa de almacenamiento de productos químicos.',
    },
    {
      termino: 'Envase',
      significado:
        'Recipiente destinado a contener productos hasta su consumo final.',
    },
    {
      termino: 'Equipamiento',
      significado:
        'Corresponde a los equipos e implementos de seguridad para combatir todo tipo de emergencias en una empresa.',
    },
    {
      termino: 'Grupo de compatibilidad',
      significado:
        'Conjunto de mercancías de la clase 1 “explosivos” que se consideran “compatibles” cuando se pueden estibar o transportar varias al mismo tiempo en condiciones de seguridad, sin aumentar de manera apreciable la probabilidad de accidente o la magnitud de los efectos de este, respecto a una cantidad determinada.',
    },
    {
      termino: 'Plan de emergencias',
      significado:
        'Definición de políticas, organizaciones y métodos que hincan la manera de enfrentar una situación de emergencia o desastre, en lo general y en lo particular, en sus distintas fases.',
    },
    {
      termino: 'Señal de advertencia',
      significado: 'Una señal que advierte sobre un riesgo o peligro.',
    },
    {
      termino: 'Señalización ',
      significado:
        'Señal o conjunto de señales que en un lugar proporcionan una información determinada, especialmente las señales de tráfico que regulan la circulación.',
    },
    {
      termino: 'Transporte interno',
      significado:
        'Es el transporte dentro de las instalaciones de la empresa y representa el desplazamiento de materiales a granel o mercancías en un sistema, es decir, dentro del emplazamiento, por ejemplo, emplazamiento de producción y centro de distribución de una empresa.',
    },
    {
      termino: 'Trasvase',
      significado:
        'Consiste en mover, pasar, trasladar, desplazar un fluido o líquido de un recipiente, envase, cavidad, receptáculo a otro.',
    },
    {
      termino: 'Tóxico',
      significado:
        'Producto que puede causar la muerte, lesiones graves o nocivas para la salud humana si se ingieren, inhalan o entran en contacto con la piel.',
    },
  ],
  complementario: [
    {
      texto: 'GemaPro. (2021). Memoria técnica de ventilación suspel/respel.',
      tipo: 'Blog',
      link: 'https://www.gemapro.cl/memoria-tecnica-ventilacion-suspel-respel/',
    },
    {
      texto: 'Norte Minero TV. (2019). Manejo de sustancias químicas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ksrAt42TkCs',
    },
    {
      texto:
        'Proyecto Higiene Química Universidad de Antioquia, (2019). Almacenamiento de productos químicos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=n8jok7B2Oog',
    },
  ],
}

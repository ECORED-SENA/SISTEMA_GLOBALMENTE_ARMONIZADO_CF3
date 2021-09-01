<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3.text-in Transporte interno de los productos químicos

    .row.mb-4
      .col-6
        figure.mb-5
          img.mediumHC(src='@/assets/curso/tema3/img01.svg', alt='Transporte interno de los productos químicos')
      .col-6.d-flex
        .cajon.d-flex.align-items-center.color-primario.p-4.mb-4
          p.mb-4 El transporte interno de productos químicos en las empresas es muy importante y requiere tener en cuenta la cantidad, tipo de productos y peligrosidad de estos para establecer el procedimiento requerido. Además, en esta actividad es importante disponer de los materiales, equipos, elementos de protección personal que son necesarios para la adecuada gestión según lo establecido en la FDS.

    #t_2_1.titulo-segundo
      .h4 2.1 Condiciones de seguridad

    p.mb-4 Cuando se va a realizar el transporte interno de algún  producto químico se debe verificar previamente las condiciones de seguridad del vehículo, el estado del mantenimiento de este y, las condiciones y competencias de la persona que lo va utilizar,  el conocimiento y respeto de las señalizaciones establecidas y las zonas de tránsito definidas en el trayecto, así como el estado  y condiciones de envases y empaques de los productos a trasladar, para identificar cualquier anomalía que estos tengan y corregirlas previo a movilizarlos.

    figure.mb-5
      img.mediumHC(src='@/assets/curso/tema3/img02.svg', alt='Condiciones de seguridad')

    #t_2_2.titulo-segundo
      .h4 2.2 Riesgos y peligros en el traslado interno
    
    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h5.mb-0 El transporte interno o local de productos químicos puede ser la causa de exposición de los trabajadores a productos químicos peligrosos.
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Al tener esto presente, el adecuado seguimiento de las pautas establecidas dentro de la bodega como el respeto de las áreas y espacios de tránsito por donde es permitido circular los vehículos y, el uso correcto de los medios de transporte de los productos químicos pueden ser factores decisivos en la mitigación de los riesgos a la exposición de trabajadores a los peligros que presentan los productos químicos dentro de las áreas de trabajo.

    .row.mb-4
      .col-7
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo09.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Para más información sobre este tema se recomienda que consulte el documento
            p Documento anexo- 9 “Transporte interno de productos químicos”
            
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

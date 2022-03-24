<script>
let   a=prompt (" Por favor ingrese su calificación de primer parcial ");
  let b=prompt(" Por favor ingrese su calificación de segunda parcial ");
  let c=prompt(" Por favor ingrese su calificación de tercera parcial ");
  
  let resultado = 0;
  
  a=parseInt (a);
  b=parseInt (b);
  c=parseInt (c);
 
  resultado= (a+b+c)/3;
  
  if(resultado >= 8){
  
  document.write('  Tu promedio es  ' + resultado  + ' estas aprobado');
  }
  else 
    document.write(' Tu promedio es ' + resultado + '  no estas aprobado ');  
  
</script>

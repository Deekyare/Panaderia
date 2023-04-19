$(document).ready(function () {
  
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;

  $(".next").click(function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 600,
      }
    );
  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 600,
      }
    );
  });

  $(".radio-group .radio").click(function () {
    $(this).parent().find(".radio").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".submit").click(function () {
    return false;
  });

  $("#contact-form").submit(function(e) {
    e.preventDefault()
    const nombre = $("#nombre").val();
    const correo = $("#correo").val();
    const mensaje = $("#mensaje").val();
    
    $.ajax({
      url: "https://reqres.in/api/users",
      type: "POST",
      data: {
        name: nombre,
        correo: correo,
        mensaje: mensaje,
      },
      success: function(result) {
        alert('Consulta enviada con exito');
        console.log(result);
        
      },
      error: function(xhr, status, error) {
        alert("Ha ocurrido un error: " + error);
      }
    });
  });

  $(".btn-enviar").click(function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores del formulario
    var nombre = document.getElementById("dato1").value;
    var apellido = document.getElementById("dato2").value;
    var email = document.getElementById("dato3").value;
   

    // Crea un nuevo objeto jsPDF
    var pdf = new jsPDF();

    // Agrega el contenido al PDF
    pdf.text(20, 20, "dato1: " + nombre);
    pdf.text(20, 30, "dato2: " + apellido);
    pdf.text(20, 40, "dato3: " + email);
    pdf.text(20, 50, "dato4: " + telefono);

    // Guarda el PDF como un archivo
    pdf.save("formulario.pdf");
});
});



// --------------------

        
   
// -----------------------

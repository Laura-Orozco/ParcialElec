function searchFunction() {
    var searchQuery = document.getElementById("search").value;
    if (searchQuery) {
        alert("Buscando: " + searchQuery);
        // Aquí podrías redirigir a una página de resultados, o realizar una búsqueda en tu sitio.
    } else {
        alert("Por favor ingresa algo para buscar.");
    }
}

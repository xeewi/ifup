/*===============================================================
 ************************* GLOBAL *******************************
 ===============================================================*/
$(document).ready(function(){
    $('.delete').on('click', function(){
        return confirm('Voulez-vous vraiment supprimer cet élément ?');
    });
});
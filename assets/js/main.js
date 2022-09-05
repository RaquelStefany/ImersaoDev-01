function media(){
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');
    const limpar = document.querySelector('.limpar').onclick = function(evento){
        evento.preventDefault();
        form.querySelector('.nota1').value = '';
        form.querySelector('.nota2').value = '';
        form.querySelector('.nota3').value = '';
        form.querySelector('.nota4').value = '';

        if(resultado.style.display == 'block'){
            resultado.style.display = 'none';
        }
    }

    function calcularMedia(evento){
        evento.preventDefault();

        const nota1 = form.querySelector('.nota1');
        const nota2 = form.querySelector('.nota2');
        const nota3 = form.querySelector('.nota3');
        const nota4 = form.querySelector('.nota4');

        if(!nota1.value || !nota2.value || !nota3.value || !nota4.value){
            alert('Dados Inexistentes');
            form.querySelector('.nota1').value = '';
            form.querySelector('.nota2').value = '';
            form.querySelector('.nota3').value = '';
            form.querySelector('.nota4').value = '';
        }
        else{
            if(Number(nota1.value) > 10 || Number(nota1.value) < 0 || Number(nota2.value) > 10 || Number(nota2.value) < 0 || Number(nota3.value) > 10 || Number(nota3.value) < 0 || Number(nota4.value) > 10 || Number(nota4.value) < 0){
                alert('Dados Inválidos');
                form.querySelector('.nota1').value = '';
                form.querySelector('.nota2').value = '';
                form.querySelector('.nota3').value = '';
                form.querySelector('.nota4').value = '';
            }
            else{
                const total = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value)) / 4;
        
                const media = total.toFixed(1);
        
                if(media < 5){
                    resultado.style.color = 'red';
                }
                else{
                    resultado.style.color = 'green';
                }
        
                resultado.style.display = 'block';
                resultado.innerHTML = `Média = ${media}`;
        
                console.log(`Média: ${media}`);
                console.log(`Nota 1: ${nota1.value}\nNota 2: ${nota2.value}\nNota 3: ${nota3.value}\nNota 4: ${nota4.value}`);
            }
        }
    }

    form.addEventListener('submit', calcularMedia);
}

media();
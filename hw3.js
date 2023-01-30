<script>
    function InputPass() {
        if (pass == 27) {
            alert(`Пароль правильный!`)
        } 
        else {
            alert('Пароль неверный :( Попробуйте ещё раз')
            while (pass != 27) {
                pass = parseInt(prompt( `Введите пароль (подсказка: 12 + 15 = ?)`));
                InputPass(pass)
            }
        }
    }
    let pass = parseInt(prompt( `Введите пароль (подсказка: 12 + 15 = ?)`));
    InputPass(pass)
</script>


let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
     btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains('increment')){
            count++;
        };

        if(styles.contains('decrement')){
            if(count > 0){
                count--;
            };
        }
     
        else if(styles.contains('save')){
            let saveEl = document.getElementById('save-el');
            let countStr = count + ' - ';
            saveEl.textContent += countStr;
            count = 0;
            
        };

        value.textContent = count;

     });

});

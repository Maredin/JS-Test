let disp = document.querySelector('.ekran'),
    btn = document.querySelectorAll('.btn'),
    clear = document.querySelector('.clear'),
    result = document.querySelector('.result')
    res = 0,
    res1 = 0;

    document.addEventListener("keydown", function(event) {
        disp.textContent += `${event.key}`;
    });

    btn.forEach(i => {
        i.addEventListener('click', () => {
            if(disp.textContent == '0') {
                disp.textContent = "";
            }
            disp.textContent += i.textContent;
        });
    });
    
    clear.addEventListener('click', () => {
        disp.textContent = "0";
    });



    result.addEventListener('click', () => {
        res1 = disp.textContent;

        res1 = disp.textContent.split(' ');
 
        for (let i = 0; i < res1.length; i++) {
            res1[i] = Number(res1[i]);
        }
        

        console.log(res1);
        res = 0;
    });
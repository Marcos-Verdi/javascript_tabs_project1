const tabsButton = document.querySelectorAll('button');
const historyContent = document.getElementById('tab-history');
const visionContent = document.getElementById('tab-vision');
const goalsContent = document.getElementById('tab-goals');


tabsButton.forEach(tabButton => {
    tabButton.addEventListener('click', 
        function displayContent(e) {
            if(e.currentTarget.id == "history-btn" && 
                !e.currentTarget.classList.contains('active')) {
                historyContent.classList.add('active');
                visionContent.classList.remove('active');
                goalsContent.classList.remove('active');
            } else if (e.currentTarget.id == "vision-btn" && 
                !e.currentTarget.classList.contains('active')) {
                historyContent.classList.remove('active');
                visionContent.classList.add('active');
                goalsContent.classList.remove('active');
            } else if (e.currentTarget.id == "goals-btn" && 
                !e.currentTarget.classList.contains('active')) {
                historyContent.classList.remove('active');
                visionContent.classList.remove('active');
                goalsContent.classList.add('active');
            }

            tabsButton.forEach(btn => {
                if (btn.classList.contains('button-displayed')) {
                    btn.classList.remove('button-displayed');
                }
            });

            e.currentTarget.setAttribute('class','button-displayed');
        }
)}
)


    
    






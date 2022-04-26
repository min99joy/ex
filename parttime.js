
        var grid = document.getElementById('grid')
        var gridContainer = document.getElementById('gridContainer')
        var url = {
        '예지상가 2층':'https://my.matterport.com/show/?m=wWoMthPXAin',
        '예지상가 1층':'https://my.matterport.com/show/?m=6SvDwjew5Dz',
        '충남식당':'https://my.matterport.com/show/?m=Fdkb7KAjoVc',
        '주차장길+등나무골목':'https://my.matterport.com/show/?m=6tXJ32A4sut',
        '을지공예':'https://my.matterport.com/show/?m=3Yewzo9ZFLo',
        '석산정':'https://my.matterport.com/show/?m=7oxmkgFjgJg',
        '대진정밀':'https://my.matterport.com/show/?m=jzMEvuk7wQR',
        '대한스프링':'https://my.matterport.com/show/?m=8y2iCSSPhLv',
        '대영절단':'https://my.matterport.com/show/?m=gccaX7yxMAo',
        '만물사':'https://my.matterport.com/show/?m=5pRaTsm5MLa',
        '우일집':'https://my.matterport.com/show/?m=yNztpNu3Thp',
        '태성볼트':'https://my.matterport.com/show/?m=JGZiyQanJGd',
        '대림정밀':'https://my.matterport.com/show/?m=Ttsf26qsueT',
        '세운기공사':'https://my.matterport.com/show/?m=vGSpNixXkUx',
        '우주정밀':'https://my.matterport.com/show/?m=uLh6anLkdU2',
        '대동정밀':'https://my.matterport.com/show/?m=7kYrQfwcdhF',
        '선우정공':'https://my.matterport.com/show/?m=P85fYScPbXn',
        '신광알곤':'https://my.matterport.com/show/?m=P85fYScPbXn',
        '태광정밀':'https://my.matterport.com/show/?m=nhdiQaUTJee',
        '한진정밀':'https://my.matterport.com/show/?m=3g4GkEc59ZU',
        '근대정밀':'https://my.matterport.com/show/?m=M3s7YVHDysy',
        '현대정공':'https://my.matterport.com/show/?m=CrG8cTWq9eH',
        '대일로구로':'https://my.matterport.com/show/?m=PcUKE6Qai6T',
        '오성기업':'https://my.matterport.com/show/?m=PwdWVY5E5Hh',
        '호진정밀':'https://my.matterport.com/show/?m=g5FGW6PCJ2n',
        '우신정밀':'https://my.matterport.com/show/?m=15LaUcwwFqq',
        '영광주물':'https://my.matterport.com/show/?m=wcPCnsXkN1i',
        '원오정밀':'https://my.matterport.com/show/?m=pYnbiFFsuxD',
        '진성정밀':'https://my.matterport.com/show/?m=czCnv5KMKcE',
        '삼미기계':'https://my.matterport.com/show/?m=n5gfd6eo42z',
        '조선옥':'https://my.matterport.com/show/?m=uw9RJRBTanS',
        }
        
        var urlList = Object.values(url);
        var keyList = Object.keys(url);

        // var ifr = document.createElement('iframe');
        // ifr.style.display = 'none';
        // ifr.setAttribute('allowFullScreen', '');
        // ifrList[i].setAttribute('src',urlList[i]+'&dh=0');
        // ifrList[i].style.display = '';
        function createGridImg() {
            for (let i = 0; i < urlList.length; i++) {
                var img = document.createElement('img');
                var li = document.createElement('li');
                var p = document.createElement('p');
                p.append(keyList[i]);
                img.setAttribute('src','img/'+keyList[i]+'.jpg')
                li.append(p, img);
                grid.appendChild(li);
            }
        }
        function showModal(id) {
            var container = document.getElementById(id);
            var box = container.querySelector('.modalWindow');
        
            box.style.transition = 'none';
            box.style.transform = 'scale(0,0)';
        
            requestAnimationFrame(function() {
                box.style.transition = 'all 0.5s ease';
                box.style.transform = 'scale(1,1)';
            });
            container.style.pointerEvents = 'auto';
            container.style.opacity = 1;
        }
        function hideModal(id) {
            var container = document.getElementById(id);
            var ifrList = document.querySelectorAll('iframe')
            container.style.opacity = 0;
            container.style.pointerEvents = 'none';
            content.removeChild(content.firstChild);
            title.removeChild(title.firstChild);
        }
        function imgClick() {
            var imageList = document.querySelectorAll('img');
            var i;
            for (let i = 0; i < imageList.length; i++) {
                imageList[i].onclick = function () {
                    createP(i);
                    createIfr(i);
                    showModal('modal');
                }
            };
        }
        function createP(i) {
            var p = document.createElement('p');
            var title = document.getElementById('title');
            p.append(keyList[i]);
            p.classList.add('modalContent')
            title.prepend(p);
        }
        function createIfr(i) {
            var ifr = document.createElement('iframe');
            var modal = document.getElementById('modal')
            ifr.setAttribute('src',urlList[i]+'&dh=0');
            ifr.setAttribute('allowFullScreen', '');
            var content = modal.querySelector('#content');
            content.prepend(ifr);
        }
        // function curtain() {
        //     var imgList = document.querySelectorAll('imgame');
        //     var liList = document.querySelectorAll('li');
        //     var gridConRec = gridContainer.getBoundingClientRect();
        //     for (let i = 0; i < liList.length; i++) {
        //         var liRec = liList[i].getBoundingClientRect();
        //         if (liRec.top > gridConRec.bottom || liRec.bottom < gridConRec.top) {
        //         }
        //          else {
        //             // imgList[i].style.display = '';
        //             console.log('hello')
        //         }
        //     }
        // };
        
        function showWebGL() {
            createGridImg();
            imgClick();
            hideModal('modal');
        }
        
        grid.addEventListener('load', showWebGL());
function loadPosts () {
    var numPosts = 2 + 1;
    for (var i=0; i < numPosts; i++){
        $.get(`posts/post_${i}.yaml`)
            .done(function (data) {
                var data = jsyaml.load(data);
                console.log(data.title);
                const card = document.createElement('li');
                card.id = 'card-' + data.num;
                card.className = data.num < 2? 'card shown':'card';
                card.innerHTML = `
                    <div class="bg_translucid wrapper__mini">
                        <div class="wrapped"> 
                            <div class="card-img" style="background-image: url(`+data.image+`);">
                            </div>
                            <div class="card-content wrapper__mini">
                                <div class="wrapped wrapper">
                                    <div class="wrapped">
                                        <h3>`+data.title+`</h3>
                                        <p>`+data.peek+`</p>
                                        </div>
                                </div>
                            </div>
                            <div class="card-access wrapper__mini">
                                <div class="wrapped wrapper">
                                    <div class="wrapped">
                                        <h4>Read more <span class="read-icon"><i class="fa fa-angle-double-right"></i></span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`
                document.getElementById('grid-'+((data.num+1)%2+1)).appendChild(card);         
        });
    }
}
function test() {
    return job().then(function() {
        return job2().then(function() {
            return job3().then(function() {
                return job4().then(function() {
                    doSomething();
                });
            });
        });
    });
}

function test(){
    return job().then(function(){
        return job2();
    }).then(function(){
        return job3();
    }).then(function(){
        return job4();
    }).then(function(){
        return doSomething()
    })

}
let d={
    c:function c()
    {
        return 'hello';
    },
    b:function b()
    {
        return d;
    },
    a:function a()
    {
        return d;
    }
}
console.log(d.a().b().c());
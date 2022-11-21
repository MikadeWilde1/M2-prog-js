class App
{
    runApplication()
    {
        console.log("hello word!")
        let appNaam = "java";
        let versienummer = "1.0";
        let versiedatum = "11/21/22";
        let autheur = "Mika";
        let copyright = "Mika©";
        let distributeur = "Mika exclusive";
        let darkmode = true

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

console.log()
let app = new App();
app.runApplication();
d3.json('http://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-Z00_MBBL.M').then(function(d) {
    
    console.log(d);
    

    
    var newdata = d.series[0].data;
    console.log(newdata);
                                    
    var description = d.series[0].description;
    
    var newObj = [];

    for (i = 0; i<newdata.length; i++) {
        newObj.push({"date":newdata[i][0], "value":newdata[i][1]});
    };

    var obj = {
        "Description": description,
        "Data": newObj
    };
    
    console.log(obj);
    var str = JSON.stringify(obj);

    console.log(str);
    d3.select('body').append('html').html(`<h1>` + str + `</h1>`);
  
});

$('#namaexp').replaceWith('<div class="namaexp"><table><thead><tr><th id="nama" scope="col">#domain</th></tr></thead><tbody><tr><td><table><thead><tr><th scope="col">DA</th><th scope="col">PA</th><th scope="col">BL</th><th scope="col">MT</th><th scope="col">MR</th><th scope="col">SS</th></tr></thead><tbody><tr><td id="da">#DA</td><td id="pa">#PA</td><td id="bl">#BL</td><td id="mt">#MT</td><td id="mr">#MR</td><td id="ss">#SS</td></tr></tbody></table></td></tr><tr><td><table><thead><tr><th scope="col">HISTORY</th><th scope="col">REGISTER</th><th scope="col">EXPIRED</th></tr></thead><tbody><tr><td id="hi">#HI</td><td id="reg">#REG</td><td id="exp">#EXP</td></tr></tbody></table></td></tr><tr><td><table><thead><tr><th scope="col">BL GOV</th><th scope="col">BL EDU</th></tr></thead><tbody><tr><td id="gov">#GOV</td><td id="edu">#EDU</td></tr></tbody></table></td></tr></tbody></table></div>');

var na="#nama",da="#da",pa="#pa",bl="#bl",mt="#mt",mr="#mr",ss="#ss",hi="#hi",reg="#reg",exp="#exp",gov="#gov",edu="#edu";

var d1="example.com";
ls.indexOf(d1)>-1&&($(na).html(d1),
$(da).html("20"),
$(pa).html("20"),
$(bl).html("100"),
$(mt).html("1"),
$(mr).html("1"),
$(ss).html("0%"),
$(hi).html("2016"),
$(reg).html("20-12-2021"),
$(exp).html("20-12-2022"),
$(gov).html("50"),
$(edu).html("50"));

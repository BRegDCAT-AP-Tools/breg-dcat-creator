//>>built
function download(b,c){dijit.byId("dijit_form_SimpleTextarea_1");var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset\x3dutf-8,"+encodeURIComponent(c));a.setAttribute("download",b);a.style.display="none";document.body.appendChild(a);a.click();document.body.removeChild(a)}
function downloadClicked(){"dijit_form_SimpleTextarea_1"==$(".dijitTabPaneWrapper.dijitTabContainerTop-container.dijitTabPaneWrapperNested.dijitAlignCenter .dijitTabContainerTopChildWrapper.dijitVisible textarea").attr("id")?download("PublicServiceDescriptionRDFXML.xml",dijit.byId("dijit_form_SimpleTextarea_1").value):download("PublicServiceDescriptionRDFJSON.json",dijit.byId("dijit_form_SimpleTextarea_2").value)};
//# sourceMappingURL=download.js.map
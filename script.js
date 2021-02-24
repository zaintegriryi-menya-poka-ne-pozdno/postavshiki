define(['jquery', 'underscore', 'twigjs'], function ($, _, Twig) {
  var CustomWidget = function () {
    var self = this;
    this.getTemplate = _.bind(function (template, params, callback) {
      params = (typeof params == 'object') ? params : {};
      template = template || '';
      return this.render({
        href: '/templates/' + template + '.twig',
        base_path: this.params.path,
        v: this.get_version(),
        load: callback
      }, params);
    }, this);

    this.callbacks = {
      render: function () {
        //saltlight         CFV[383011][804485]
        //МеталлПрофиль     CFV[383011][742307]
        //МРП               CFV[383011][804771]
        //ЮАР               CFV[383011][742309]
        //КарбоГласс        CFV[383011][742311]
        //СКР               CFV[383011][742313]
        //СКН               CFV[383011][742315]
        //Сибирский Бизнес  CFV[383011][742317]
        //СибТеплоКомплект  CFV[383011][742319]
        //Максикров         CFV[383011][742321]
        //Тегола            CFV[383011][742323]
        //ИрПласт           CFV[383011][742325]
        //5 Веков           CFV[383011][742327]
        //ЕКТ               CFV[383011][742329]
        //СПК               CFV[383011][742331]
        //Профит            CFV[383011][742333]
        //Пластик и Крепеж  CFV[383011][742335]
        //Русклимат         CFV[383011][742337]
        //Ю пласт           CFV[383011][742339]
        //Гекса             CFV[383011][742341]
        //Фитинг 24         CFV[383011][742343]
        //ГенПоставка       CFV[383011][742345]
        //Маяк              CFV[383011][742347]
        //Феррум            CFV[383011][742349]
        //ТеплоКом          CFV[383011][742351]
        //Современные окна  CFV[383011][742353]
        //Полимет           CFV[383011][742355]
        //Финестра          CFV[383011][742357]
        //ТехноНиколь       CFV[383011][742359]
        //Водолей           CFV[383011][742361]
        //Амбар             CFV[383011][742363]
        //Сатурн            CFV[383011][742365]
        //СКМ-мебель        CFV[383011][742367]
        //Теплодар          CFV[383011][742369]
        //АгроТитан         CFV[383011][742371]
        //ФасадИнжиниринг   CFV[383011][762999]
        //АМИС              CFV[383011][772387]
        //Литвинов          CFV[383011][796095]
        //Гордеев           CFV[383011][796097]
        //Монарх Сибирь     CFV[383011][796099]
        //Красноярск        CFV[383011][796101]
        //Мир Плинтуса      CFV[383011][796103]
        //Гибмастер         CFV[383011][804593]
        //Фанера Сибири     CFV[383011][804595]
        //МСВ               CFV[383011][807705]
        $("input[name='CFV[567995]']").parent().parent().css("display", "none");   //saltlight
        $("input[name='CFV[567997]']").parent().parent().css("display", "none");   //saltlight1
        $("input[name='CFV[567999]']").parent().parent().css("display", "none");   //saltlight2
        $("input[name='CFV[568001]']").parent().parent().css("display", "none");   //saltlight3

        $("input[name='CFV[568003]']").parent().parent().css("display", "none");  // МеталлПрофиль
        $("input[name='CFV[568005]']").parent().parent().css("display", "none");  // МеталлПрофиль1
        $("input[name='CFV[568007]']").parent().parent().css("display", "none");  // МеталлПрофиль2
        $("input[name='CFV[568009]']").parent().parent().css("display", "none");  // МеталлПрофиль3

        $("input[name='CFV[568011]']").parent().parent().css("display", "none");  // мрп
        $("input[name='CFV[568013]']").parent().parent().css("display", "none");  // мрп1
        $("input[name='CFV[568015]']").parent().parent().css("display", "none");  // мрп2
        $("input[name='CFV[568017]']").parent().parent().css("display", "none");  // мрп3

        $("input[name='CFV[568019]']").parent().parent().css("display", "none");  // ЮАР
        $("input[name='CFV[568021]']").parent().parent().css("display", "none");  // ЮАР1
        $("input[name='CFV[568023]']").parent().parent().css("display", "none");  // ЮАР2
        $("input[name='CFV[568025]']").parent().parent().css("display", "none");  // ЮАР3

        $("input[name='CFV[568041]']").parent().parent().css("display", "none");  // КарбоГласс
        $("input[name='CFV[568043]']").parent().parent().css("display", "none");  // кг1
        $("input[name='CFV[568045]']").parent().parent().css("display", "none");  // кг2
        $("input[name='CFV[568047]']").parent().parent().css("display", "none");  // гк3

        $("input[name='CFV[568049]']").parent().parent().css("display", "none");  // СКР
        $("input[name='CFV[568051]']").parent().parent().css("display", "none");  // скр1
        $("input[name='CFV[568053]']").parent().parent().css("display", "none");  // скр2
        $("input[name='CFV[568055]']").parent().parent().css("display", "none");  // скр3

        $("input[name='CFV[568057]']").parent().parent().css("display", "none");  // СКН
        $("input[name='CFV[568059]']").parent().parent().css("display", "none");  // скн1
        $("input[name='CFV[568061]']").parent().parent().css("display", "none");  // скн2
        $("input[name='CFV[568063]']").parent().parent().css("display", "none");  // скн3

        let saltlight, saltlight1, saltlight2, saltlight3, mp, mp1, mp2, mp3, mrp, mrp1,mrp2,mrp3,ar,ar1,ar2,ar3,kg,kg1,kg2,kg3,skr,skr1,skr2,skr3,skn,skn1,skn2,skn3;
        let multiselects = $(".linked-forms__group-wrapper > div > div > span").length;
        for (let i = 0; i < multiselects; i++) {
          form_pay_parent = $($($(".linked-forms__group-wrapper > div > div > span"))[i]).parent();
          // console.log(form_pay_parent.context.innerText);
          if (form_pay_parent.context.innerText == "saltlight") {
            saltlight = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "saltlight1")
            saltlight1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "saltlight2")
            saltlight2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "saltlight3")
            saltlight3 = form_pay_parent.context;
          //МеталлПрофиль
          if (form_pay_parent.context.innerText == "МеtаллПрофиль") {
            mp = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "мп1")
            mp1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "мп2")
            mp2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "мп3")
            mp3 = form_pay_parent.context;
          //МРП
          if (form_pay_parent.context.innerText == "МРП") {
            mrp = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "мрп1")
            mrp1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "мрп2")
            mrp2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "мрп3")
            mrp3 = form_pay_parent.context;
          //ЮАР
          if (form_pay_parent.context.innerText == "ЮАP") {
            ar = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "юар1")
            ar1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "юар2")
            ar2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "юар3")
            ar3 = form_pay_parent.context;
          //КарбоГласс
          if (form_pay_parent.context.innerText == "KарбоГласс") {
            kg = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "кг1")
            kg1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "кг2")
            kg2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "кг3")
            kg3 = form_pay_parent.context;
          //СКР
          if (form_pay_parent.context.innerText == "CКР") {
            skr = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "скр1")
            skr1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "скр2")
            skr2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "скр3")
            skr3 = form_pay_parent.context;
          //СКН
          if (form_pay_parent.context.innerText == "CКН") {
            skn = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "скн1")
            skn1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "скн2")
            skn2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "скн3")
            skn3 = form_pay_parent.context;
        }


        if ($("input[name='CFV[383011][804485]']").prop("checked")) {
          $("input[name='CFV[567995]']").parent().parent().css("display", "flex");
          let button1 = document.createElement("div");
          button1.id = "button1";
          const text = document.createTextNode("+");
          button1.appendChild(text);
          button1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 74px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          saltlight.appendChild(button1);
          $("#button1").click(function () {
            if ($("input[name='CFV[567997]']").parent().parent().css("display") != "flex") {
              saltlight1.innerText = " ";
              $("input[name='CFV[567997]']").parent().parent().css("display", "flex");
              let button1minus = document.createElement("div");
              button1minus.id = "button1minus";
              const textminus = document.createTextNode("x");
              button1minus.appendChild(textminus);
              button1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              saltlight1.appendChild(button1minus);
            } else if ($("input[name='CFV[567999]']").parent().parent().css("display") != "flex") {
              saltlight2.innerText = " ";
              $("input[name='CFV[567999]']").parent().parent().css("display", "flex");
              let button1minus1 = document.createElement("div");
              button1minus1.id = "button1minus1";
              const textminus1 = document.createTextNode("x");
              button1minus1.appendChild(textminus1);
              button1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              saltlight2.appendChild(button1minus1);
            } else if ($("input[name='CFV[568001]']").parent().parent().css("display") != "flex") {
              saltlight3.innerText = " ";
              $("input[name='CFV[568001]']").parent().parent().css("display", "flex");
              let button1minus2 = document.createElement("div");
              button1minus2.id = "button1minus2";
              const textminus2 = document.createTextNode("x");
              button1minus2.appendChild(textminus2);
              button1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              saltlight3.appendChild(button1minus2);
            }
            $("#button1minus").click(function () {
              if ($("input[name='CFV[567997]']").css("display") == "inline-block") {
                $("input[name='CFV[567997]']").parent().parent().css("display", "none");
              }
            });
            $("#button1minus1").click(function () {
              if ($("input[name='CFV[567999]']").css("display") == "inline-block") {
                $("input[name='CFV[567999]']").parent().parent().css("display", "none");
              }
            });
            $("#button1minus2").click(function () {
              if ($("input[name='CFV[568001]']").css("display") == "inline-block") {
                $("input[name='CFV[568001]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[567995]']").parent().parent().css("display", "none");
          $("input[name='CFV[567997]']").parent().parent().css("display", "none");
          $("input[name='CFV[567999]']").parent().parent().css("display", "none");
          $("input[name='CFV[568001]']").parent().parent().css("display", "none");
        }
        // МеталлПрофиль
        if ($("input[name='CFV[383011][742307]']").prop("checked")) {
          $("input[name='CFV[568003]']").parent().parent().css("display", "flex");
          let buttonmp1 = document.createElement("div");
          buttonmp1.id = "buttonmp1";
          const textmp = document.createTextNode("+");
          buttonmp1.appendChild(textmp);
          buttonmp1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 21px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          mp.appendChild(buttonmp1);
          $("#buttonmp1").click(function () {
            if ($("input[name='CFV[568005]']").parent().parent().css("display") != "flex") {
              mp1.innerText = " ";
              $("input[name='CFV[568005]']").parent().parent().css("display", "flex");
              let buttonmp1minus = document.createElement("div");
              buttonmp1minus.id = "buttonmp1minus";
              const textminus = document.createTextNode("x");
              buttonmp1minus.appendChild(textminus);
              buttonmp1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              mp1.appendChild(buttonmp1minus);
            } else if ($("input[name='CFV[568007]']").parent().parent().css("display") != "flex") {
              mp2.innerText = " ";
              $("input[name='CFV[568007]']").parent().parent().css("display", "flex");
              let buttonmp1minus1 = document.createElement("div");
              buttonmp1minus1.id = "buttonmp1minus1";
              const textminus1 = document.createTextNode("x");
              buttonmp1minus1.appendChild(textminus1);
              buttonmp1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              mp2.appendChild(buttonmp1minus1);
            } else if ($("input[name='CFV[568009]']").parent().parent().css("display") != "flex") {
              mp3.innerText = " ";
              $("input[name='CFV[568009]']").parent().parent().css("display", "flex");
              let buttonmp1minus2 = document.createElement("div");
              buttonmp1minus2.id = "buttonmp1minus2";
              const textminus2 = document.createTextNode("x");
              buttonmp1minus2.appendChild(textminus2);
              buttonmp1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              mp3.appendChild(buttonmp1minus2);
            }
            $("#buttonmp1minus").click(function () {
              if ($("input[name='CFV[568005]']").css("display") == "inline-block") {
                $("input[name='CFV[568005]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonmp1minus1").click(function () {
              if ($("input[name='CFV[568007]']").css("display") == "inline-block") {
                $("input[name='CFV[568007]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonmp1minus2").click(function () {
              if ($("input[name='CFV[568009]']").css("display") == "inline-block") {
                $("input[name='CFV[568009]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568003]']").parent().parent().css("display", "none");
          $("input[name='CFV[568005]']").parent().parent().css("display", "none");
          $("input[name='CFV[568007]']").parent().parent().css("display", "none");
          $("input[name='CFV[568009]']").parent().parent().css("display", "none");
        }
        //МРП
        if ($("input[name='CFV[383011][804771]']").prop("checked")) {
          $("input[name='CFV[568011]']").parent().parent().css("display", "flex");
          let buttonmrp1 = document.createElement("div");
          buttonmrp1.id = "buttonmrp1";
          const textmp = document.createTextNode("+");
          buttonmrp1.appendChild(textmp);
          buttonmrp1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 97px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          mrp.appendChild(buttonmrp1);
          $("#buttonmrp1").click(function () {
            if ($("input[name='CFV[568013]']").parent().parent().css("display") != "flex") {
              mrp1.innerText = " ";
              $("input[name='CFV[568013]']").parent().parent().css("display", "flex");
              let buttonmrp1minus = document.createElement("div");
              buttonmrp1minus.id = "buttonmrp1minus";
              const textminus = document.createTextNode("x");
              buttonmrp1minus.appendChild(textminus);
              buttonmrp1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              mrp1.appendChild(buttonmrp1minus);
            } else if ($("input[name='CFV[568015]']").parent().parent().css("display") != "flex") {
              mrp2.innerText = " ";
              $("input[name='CFV[568015]']").parent().parent().css("display", "flex");
              let buttonmrp1minus1 = document.createElement("div");
              buttonmrp1minus1.id = "buttonmrp1minus1";
              const textminus1 = document.createTextNode("x");
              buttonmrp1minus1.appendChild(textminus1);
              buttonmrp1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              mrp2.appendChild(buttonmrp1minus1);
            } else if ($("input[name='CFV[568017]']").parent().parent().css("display") != "flex") {
              mrp3.innerText = " ";
              $("input[name='CFV[568017]']").parent().parent().css("display", "flex");
              let buttonmrp1minus2 = document.createElement("div");
              buttonmrp1minus2.id = "buttonmrp1minus2";
              const textminus2 = document.createTextNode("x");
              buttonmrp1minus2.appendChild(textminus2);
              buttonmrp1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              mrp3.appendChild(buttonmrp1minus2);
            }
            $("#buttonmrp1minus").click(function () {
              if ($("input[name='CFV[568013]']").css("display") == "inline-block") {
                $("input[name='CFV[568013]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonmrp1minus1").click(function () {
              if ($("input[name='CFV[568015]']").css("display") == "inline-block") {
                $("input[name='CFV[568015]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonmrp1minus2").click(function () {
              if ($("input[name='CFV[568017]']").css("display") == "inline-block") {
                $("input[name='CFV[568017]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568011]']").parent().parent().css("display", "none");
          $("input[name='CFV[568013]']").parent().parent().css("display", "none");
          $("input[name='CFV[568015]']").parent().parent().css("display", "none");
          $("input[name='CFV[568017]']").parent().parent().css("display", "none");
        }
        //ЮАР
        if ($("input[name='CFV[383011][742309]']").prop("checked")) {
          $("input[name='CFV[568019]']").parent().parent().css("display", "flex");
          let buttonar1 = document.createElement("div");
          buttonar1.id = "buttonar1";
          const textmp = document.createTextNode("+");
          buttonar1.appendChild(textmp);
          buttonar1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 97px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          ar.appendChild(buttonar1);
          $("#buttonar1").click(function () {
            if ($("input[name='CFV[568021]']").parent().parent().css("display") != "flex") {
              ar1.innerText = " ";
              $("input[name='CFV[568021]']").parent().parent().css("display", "flex");
              let buttonar1minus = document.createElement("div");
              buttonar1minus.id = "buttonar1minus";
              const textminus = document.createTextNode("x");
              buttonar1minus.appendChild(textminus);
              buttonar1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ar1.appendChild(buttonar1minus);
            } else if ($("input[name='CFV[568023]']").parent().parent().css("display") != "flex") {
              ar2.innerText = " ";
              $("input[name='CFV[568023]']").parent().parent().css("display", "flex");
              let buttonar1minus1 = document.createElement("div");
              buttonar1minus1.id = "buttonar1minus1";
              const textminus1 = document.createTextNode("x");
              buttonar1minus1.appendChild(textminus1);
              buttonar1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ar2.appendChild(buttonar1minus1);
            } else if ($("input[name='CFV[568025]']").parent().parent().css("display") != "flex") {
              ar3.innerText = " ";
              $("input[name='CFV[568025]']").parent().parent().css("display", "flex");
              let buttonar1minus2 = document.createElement("div");
              buttonar1minus2.id = "buttonar1minus2";
              const textminus2 = document.createTextNode("x");
              buttonar1minus2.appendChild(textminus2);
              buttonar1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ar3.appendChild(buttonar1minus2);
            }
            $("#buttonar1minus").click(function () {
              if ($("input[name='CFV[568021]']").css("display") == "inline-block") {
                $("input[name='CFV[568021]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonar1minus1").click(function () {
              if ($("input[name='CFV[568023]']").css("display") == "inline-block") {
                $("input[name='CFV[568023]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonar1minus2").click(function () {
              if ($("input[name='CFV[568025]']").css("display") == "inline-block") {
                $("input[name='CFV[568025]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568019]']").parent().parent().css("display", "none");
          $("input[name='CFV[568021]']").parent().parent().css("display", "none");
          $("input[name='CFV[568023]']").parent().parent().css("display", "none");
          $("input[name='CFV[568025]']").parent().parent().css("display", "none");
        }
        //КарбоГласс
        if ($("input[name='CFV[383011][742311]']").prop("checked")) {
          $("input[name='CFV[568041]']").parent().parent().css("display", "flex");
          let buttonkg1 = document.createElement("div");
          buttonkg1.id = "buttonkg1";
          const textmp = document.createTextNode("+");
          buttonkg1.appendChild(textmp);
          buttonkg1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 53px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          kg.appendChild(buttonkg1);
          $("#buttonkg1").click(function () {
            if ($("input[name='CFV[568043]']").parent().parent().css("display") != "flex") {
              kg1.innerText = " ";
              $("input[name='CFV[568043]']").parent().parent().css("display", "flex");
              let buttonkg1minus = document.createElement("div");
              buttonkg1minus.id = "buttonkg1minus";
              const textminus = document.createTextNode("x");
              buttonkg1minus.appendChild(textminus);
              buttonkg1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              kg1.appendChild(buttonkg1minus);
            } else if ($("input[name='CFV[568045]']").parent().parent().css("display") != "flex") {
              kg2.innerText = " ";
              $("input[name='CFV[568045]']").parent().parent().css("display", "flex");
              let buttonkg1minus1 = document.createElement("div");
              buttonkg1minus1.id = "buttonkg1minus1";
              const textminus1 = document.createTextNode("x");
              buttonkg1minus1.appendChild(textminus1);
              buttonkg1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              kg2.appendChild(buttonkg1minus1);
            } else if ($("input[name='CFV[568047]']").parent().parent().css("display") != "flex") {
              kg3.innerText = " ";
              $("input[name='CFV[568047]']").parent().parent().css("display", "flex");
              let buttonkg1minus2 = document.createElement("div");
              buttonkg1minus2.id = "buttonkg1minus2";
              const textminus2 = document.createTextNode("x");
              buttonkg1minus2.appendChild(textminus2);
              buttonkg1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              kg3.appendChild(buttonkg1minus2);
            }
            $("#buttonkg1minus").click(function () {
              if ($("input[name='CFV[568043]']").css("display") == "inline-block") {
                $("input[name='CFV[568043]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonkg1minus1").click(function () {
              if ($("input[name='CFV[568045]']").css("display") == "inline-block") {
                $("input[name='CFV[568045]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonkg1minus2").click(function () {
              if ($("input[name='CFV[568047]']").css("display") == "inline-block") {
                $("input[name='CFV[568047]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568041]']").parent().parent().css("display", "none");
          $("input[name='CFV[568043]']").parent().parent().css("display", "none");
          $("input[name='CFV[568045]']").parent().parent().css("display", "none");
          $("input[name='CFV[568047]']").parent().parent().css("display", "none");
        }
        //СКР
        if ($("input[name='CFV[383011][742313]']").prop("checked")) {
          $("input[name='CFV[568049]']").parent().parent().css("display", "flex");
          let buttonskr1 = document.createElement("div");
          buttonskr1.id = "buttonskr1";
          const textmp = document.createTextNode("+");
          buttonskr1.appendChild(textmp);
          buttonskr1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 101px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          skr.appendChild(buttonskr1);
          $("#buttonskr1").click(function () {
            if ($("input[name='CFV[568051]']").parent().parent().css("display") != "flex") {
              skr1.innerText = " ";
              $("input[name='CFV[568051]']").parent().parent().css("display", "flex");
              let buttonskr1minus = document.createElement("div");
              buttonskr1minus.id = "buttonskr1minus";
              const textminus = document.createTextNode("x");
              buttonskr1minus.appendChild(textminus);
              buttonskr1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              skr1.appendChild(buttonskr1minus);
            } else if ($("input[name='CFV[568053]']").parent().parent().css("display") != "flex") {
              skr2.innerText = " ";
              $("input[name='CFV[568053]']").parent().parent().css("display", "flex");
              let buttonskr1minus1 = document.createElement("div");
              buttonskr1minus1.id = "buttonskr1minus1";
              const textminus1 = document.createTextNode("x");
              buttonskr1minus1.appendChild(textminus1);
              buttonskr1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              skr2.appendChild(buttonskr1minus1);
            } else if ($("input[name='CFV[568055]']").parent().parent().css("display") != "flex") {
              skr3.innerText = " ";
              $("input[name='CFV[568055]']").parent().parent().css("display", "flex");
              let buttonskr1minus2 = document.createElement("div");
              buttonskr1minus2.id = "buttonskr1minus2";
              const textminus2 = document.createTextNode("x");
              buttonskr1minus2.appendChild(textminus2);
              buttonskr1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              skr3.appendChild(buttonskr1minus2);
            }
            $("#buttonskr1minus").click(function () {
              if ($("input[name='CFV[568051]']").css("display") == "inline-block") {
                $("input[name='CFV[568051]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonskr1minus1").click(function () {
              if ($("input[name='CFV[568053]']").css("display") == "inline-block") {
                $("input[name='CFV[568053]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonskr1minus2").click(function () {
              if ($("input[name='CFV[568055]']").css("display") == "inline-block") {
                $("input[name='CFV[568055]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568049]']").parent().parent().css("display", "none");
          $("input[name='CFV[568051]']").parent().parent().css("display", "none");
          $("input[name='CFV[568053]']").parent().parent().css("display", "none");
          $("input[name='CFV[568055]']").parent().parent().css("display", "none");
        }
        //СКН
        if ($("input[name='CFV[383011][742315]']").prop("checked")) {
          $("input[name='CFV[568057]']").parent().parent().css("display", "flex");
          let buttonskn1 = document.createElement("div");
          buttonskn1.id = "buttonskn1";
          const textmp = document.createTextNode("+");
          buttonskn1.appendChild(textmp);
          buttonskn1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 101px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          skn.appendChild(buttonskn1);
          $("#buttonskn1").click(function () {
            if ($("input[name='CFV[568059]']").parent().parent().css("display") != "flex") {
              skn1.innerText = " ";
              $("input[name='CFV[568059]']").parent().parent().css("display", "flex");
              let buttonskn1minus = document.createElement("div");
              buttonskn1minus.id = "buttonskn1minus";
              const textminus = document.createTextNode("x");
              buttonskn1minus.appendChild(textminus);
              buttonskn1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              skn1.appendChild(buttonskn1minus);
            } else if ($("input[name='CFV[568061]']").parent().parent().css("display") != "flex") {
              skn2.innerText = " ";
              $("input[name='CFV[568061]']").parent().parent().css("display", "flex");
              let buttonskn1minus1 = document.createElement("div");
              buttonskn1minus1.id = "buttonskn1minus1";
              const textminus1 = document.createTextNode("x");
              buttonskn1minus1.appendChild(textminus1);
              buttonskn1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              skn2.appendChild(buttonskn1minus1);
            } else if ($("input[name='CFV[568063]']").parent().parent().css("display") != "flex") {
              skn3.innerText = " ";
              $("input[name='CFV[568063]']").parent().parent().css("display", "flex");
              let buttonskn1minus2 = document.createElement("div");
              buttonskn1minus2.id = "buttonskn1minus2";
              const textminus2 = document.createTextNode("x");
              buttonskn1minus2.appendChild(textminus2);
              buttonskn1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              skn3.appendChild(buttonskn1minus2);
            }
            $("#buttonskn1minus").click(function () {
              if ($("input[name='CFV[568059]']").css("display") == "inline-block") {
                $("input[name='CFV[568059]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonskn1minus1").click(function () {
              if ($("input[name='CFV[568061]']").css("display") == "inline-block") {
                $("input[name='CFV[568061]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonskn1minus2").click(function () {
              if ($("input[name='CFV[568063]']").css("display") == "inline-block") {
                $("input[name='CFV[568063]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568057]']").parent().parent().css("display", "none");
          $("input[name='CFV[568059]']").parent().parent().css("display", "none");
          $("input[name='CFV[568061]']").parent().parent().css("display", "none");
          $("input[name='CFV[568063]']").parent().parent().css("display", "none");
        }


        $("input[name='CFV[383011][804485]'], input[name='CFV[383011][742307]'], input[name='CFV[383011][804771]'],input[name='CFV[383011][742309]'],input[name='CFV[383011][742311]'],input[name='CFV[383011][742313]'], input[name='CFV[383011][742315]'],input[name='CFV[383011][742317]'],input[name='CFV[383011][742319]']").click(function (e) {

          if ($("input[name='CFV[383011][804485]']").prop("checked")) {
            $("input[name='CFV[567995]']").parent().parent().css("display", "flex");
            let button1 = document.createElement("div");
            button1.id = "button1";
            const text = document.createTextNode("+");
            button1.appendChild(text);
            button1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 74px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            saltlight.appendChild(button1);
            $("#button1").click(function () {
              if ($("input[name='CFV[567997]']").parent().parent().css("display") != "flex") {
                saltlight1.innerText = " ";
                $("input[name='CFV[567997]']").parent().parent().css("display", "flex");
                let button1minus = document.createElement("div");
                button1minus.id = "button1minus";
                const textminus = document.createTextNode("x");
                button1minus.appendChild(textminus);
                button1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                saltlight1.appendChild(button1minus);
              } else if ($("input[name='CFV[567999]']").parent().parent().css("display") != "flex") {
                saltlight2.innerText = " ";
                $("input[name='CFV[567999]']").parent().parent().css("display", "flex");
                let button1minus1 = document.createElement("div");
                button1minus1.id = "button1minus1";
                const textminus1 = document.createTextNode("x");
                button1minus1.appendChild(textminus1);
                button1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                saltlight2.appendChild(button1minus1);
              } else if ($("input[name='CFV[568001]']").parent().parent().css("display") != "flex") {
                saltlight3.innerText = " ";
                $("input[name='CFV[568001]']").parent().parent().css("display", "flex");
                let button1minus2 = document.createElement("div");
                button1minus2.id = "button1minus2";
                const textminus2 = document.createTextNode("x");
                button1minus2.appendChild(textminus2);
                button1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                saltlight3.appendChild(button1minus2);
              }
              $("#button1minus").click(function () {
                if ($("input[name='CFV[567997]']").css("display") == "inline-block") {
                  $("input[name='CFV[567997]']").parent().parent().css("display", "none");
                }
              });
              $("#button1minus1").click(function () {
                if ($("input[name='CFV[567999]']").css("display") == "inline-block") {
                  $("input[name='CFV[567999]']").parent().parent().css("display", "none");
                }
              });
              $("#button1minus2").click(function () {
                if ($("input[name='CFV[568001]']").css("display") == "inline-block") {
                  $("input[name='CFV[568001]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[567995]']").parent().parent().css("display", "none");
            $("input[name='CFV[567997]']").parent().parent().css("display", "none");
            $("input[name='CFV[567999]']").parent().parent().css("display", "none");
            $("input[name='CFV[568001]']").parent().parent().css("display", "none");
          }
          //МеталлПрофиль
          if ($("input[name='CFV[383011][742307]']").prop("checked")) {
            $("input[name='CFV[568003]']").parent().parent().css("display", "flex");
            let buttonmp1 = document.createElement("div");
            buttonmp1.id = "buttonmp1";
            const textmp = document.createTextNode("+");
            buttonmp1.appendChild(textmp);
            buttonmp1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 21px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            mp.appendChild(buttonmp1);
            $("#buttonmp1").click(function () {
              if ($("input[name='CFV[568005]']").parent().parent().css("display") != "flex") {
                mp1.innerText = " ";
                $("input[name='CFV[568005]']").parent().parent().css("display", "flex");
                let buttonmp1minus = document.createElement("div");
                buttonmp1minus.id = "buttonmp1minus";
                const textminus = document.createTextNode("x");
                buttonmp1minus.appendChild(textminus);
                buttonmp1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                mp1.appendChild(buttonmp1minus);
              } else if ($("input[name='CFV[568007]']").parent().parent().css("display") != "flex") {
                mp2.innerText = " ";
                $("input[name='CFV[568007]']").parent().parent().css("display", "flex");
                let buttonmp1minus1 = document.createElement("div");
                buttonmp1minus1.id = "buttonmp1minus1";
                const textminus1 = document.createTextNode("x");
                buttonmp1minus1.appendChild(textminus1);
                buttonmp1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                mp2.appendChild(buttonmp1minus1);
              } else if ($("input[name='CFV[568009]']").parent().parent().css("display") != "flex") {
                mp3.innerText = " ";
                $("input[name='CFV[568009]']").parent().parent().css("display", "flex");
                let buttonmp1minus2 = document.createElement("div");
                buttonmp1minus2.id = "buttonmp1minus2";
                const textminus2 = document.createTextNode("x");
                buttonmp1minus2.appendChild(textminus2);
                buttonmp1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                mp3.appendChild(buttonmp1minus2);
              }
              $("#buttonmp1minus").click(function () {
                if ($("input[name='CFV[568005]']").css("display") == "inline-block") {
                  $("input[name='CFV[568005]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonmp1minus1").click(function () {
                if ($("input[name='CFV[568007]']").css("display") == "inline-block") {
                  $("input[name='CFV[568007]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonmp1minus2").click(function () {
                if ($("input[name='CFV[568009]']").css("display") == "inline-block") {
                  $("input[name='CFV[568009]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568003]']").parent().parent().css("display", "none");
            $("input[name='CFV[568005]']").parent().parent().css("display", "none");
            $("input[name='CFV[568007]']").parent().parent().css("display", "none");
            $("input[name='CFV[568009]']").parent().parent().css("display", "none");
          }
          //МРП
          if ($("input[name='CFV[383011][804771]']").prop("checked")) {
            $("input[name='CFV[568011]']").parent().parent().css("display", "flex");
            let buttonmrp1 = document.createElement("div");
            buttonmrp1.id = "buttonmrp1";
            const textmp = document.createTextNode("+");
            buttonmrp1.appendChild(textmp);
            buttonmrp1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 97px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            mrp.appendChild(buttonmrp1);
            $("#buttonmrp1").click(function () {
              if ($("input[name='CFV[568013]']").parent().parent().css("display") != "flex") {
                mrp1.innerText = " ";
                $("input[name='CFV[568013]']").parent().parent().css("display", "flex");
                let buttonmrp1minus = document.createElement("div");
                buttonmrp1minus.id = "buttonmrp1minus";
                const textminus = document.createTextNode("x");
                buttonmrp1minus.appendChild(textminus);
                buttonmrp1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                mrp1.appendChild(buttonmrp1minus);
              } else if ($("input[name='CFV[568015]']").parent().parent().css("display") != "flex") {
                mrp2.innerText = " ";
                $("input[name='CFV[568015]']").parent().parent().css("display", "flex");
                let buttonmrp1minus1 = document.createElement("div");
                buttonmrp1minus1.id = "buttonmrp1minus1";
                const textminus1 = document.createTextNode("x");
                buttonmrp1minus1.appendChild(textminus1);
                buttonmrp1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                mrp2.appendChild(buttonmrp1minus1);
              } else if ($("input[name='CFV[568017]']").parent().parent().css("display") != "flex") {
                mrp3.innerText = " ";
                $("input[name='CFV[568017]']").parent().parent().css("display", "flex");
                let buttonmrp1minus2 = document.createElement("div");
                buttonmrp1minus2.id = "buttonmrp1minus2";
                const textminus2 = document.createTextNode("x");
                buttonmrp1minus2.appendChild(textminus2);
                buttonmrp1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                mrp3.appendChild(buttonmrp1minus2);
              }
              $("#buttonmrp1minus").click(function () {
                if ($("input[name='CFV[568013]']").css("display") == "inline-block") {
                  $("input[name='CFV[568013]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonmrp1minus1").click(function () {
                if ($("input[name='CFV[568015]']").css("display") == "inline-block") {
                  $("input[name='CFV[568015]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonmrp1minus2").click(function () {
                if ($("input[name='CFV[568017]']").css("display") == "inline-block") {
                  $("input[name='CFV[568017]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568011]']").parent().parent().css("display", "none");
            $("input[name='CFV[568013]']").parent().parent().css("display", "none");
            $("input[name='CFV[568015]']").parent().parent().css("display", "none");
            $("input[name='CFV[568017]']").parent().parent().css("display", "none");
          }
          //ЮАР
          if ($("input[name='CFV[383011][742309]']").prop("checked")) {
            $("input[name='CFV[568019]']").parent().parent().css("display", "flex");
            let buttonar1 = document.createElement("div");
            buttonar1.id = "buttonar1";
            const textmp = document.createTextNode("+");
            buttonar1.appendChild(textmp);
            buttonar1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 97px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            ar.appendChild(buttonar1);
            $("#buttonar1").click(function () {
              if ($("input[name='CFV[568021]']").parent().parent().css("display") != "flex") {
                ar1.innerText = " ";
                $("input[name='CFV[568021]']").parent().parent().css("display", "flex");
                let buttonar1minus = document.createElement("div");
                buttonar1minus.id = "buttonar1minus";
                const textminus = document.createTextNode("x");
                buttonar1minus.appendChild(textminus);
                buttonar1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ar1.appendChild(buttonar1minus);
              } else if ($("input[name='CFV[568023]']").parent().parent().css("display") != "flex") {
                ar2.innerText = " ";
                $("input[name='CFV[568023]']").parent().parent().css("display", "flex");
                let buttonar1minus1 = document.createElement("div");
                buttonar1minus1.id = "buttonar1minus1";
                const textminus1 = document.createTextNode("x");
                buttonar1minus1.appendChild(textminus1);
                buttonar1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ar2.appendChild(buttonar1minus1);
              } else if ($("input[name='CFV[568025]']").parent().parent().css("display") != "flex") {
                ar3.innerText = " ";
                $("input[name='CFV[568025]']").parent().parent().css("display", "flex");
                let buttonar1minus2 = document.createElement("div");
                buttonar1minus2.id = "buttonar1minus2";
                const textminus2 = document.createTextNode("x");
                buttonar1minus2.appendChild(textminus2);
                buttonar1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ar3.appendChild(buttonar1minus2);
              }
              $("#buttonar1minus").click(function () {
                if ($("input[name='CFV[568021]']").css("display") == "inline-block") {
                  $("input[name='CFV[568021]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonar1minus1").click(function () {
                if ($("input[name='CFV[568023]']").css("display") == "inline-block") {
                  $("input[name='CFV[568023]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonar1minus2").click(function () {
                if ($("input[name='CFV[568025]']").css("display") == "inline-block") {
                  $("input[name='CFV[568025]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568019]']").parent().parent().css("display", "none");
            $("input[name='CFV[568021]']").parent().parent().css("display", "none");
            $("input[name='CFV[568023]']").parent().parent().css("display", "none");
            $("input[name='CFV[568025]']").parent().parent().css("display", "none");
          }
          //КарбоГласс
          if ($("input[name='CFV[383011][742311]']").prop("checked")) {
            $("input[name='CFV[568041]']").parent().parent().css("display", "flex");
            let buttonkg1 = document.createElement("div");
            buttonkg1.id = "buttonkg1";
            const textmp = document.createTextNode("+");
            buttonkg1.appendChild(textmp);
            buttonkg1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 53px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            kg.appendChild(buttonkg1);
            $("#buttonkg1").click(function () {
              if ($("input[name='CFV[568043]']").parent().parent().css("display") != "flex") {
                kg1.innerText = " ";
                $("input[name='CFV[568043]']").parent().parent().css("display", "flex");
                let buttonkg1minus = document.createElement("div");
                buttonkg1minus.id = "buttonkg1minus";
                const textminus = document.createTextNode("x");
                buttonkg1minus.appendChild(textminus);
                buttonkg1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                kg1.appendChild(buttonkg1minus);
              } else if ($("input[name='CFV[568045]']").parent().parent().css("display") != "flex") {
                kg2.innerText = " ";
                $("input[name='CFV[568045]']").parent().parent().css("display", "flex");
                let buttonkg1minus1 = document.createElement("div");
                buttonkg1minus1.id = "buttonkg1minus1";
                const textminus1 = document.createTextNode("x");
                buttonkg1minus1.appendChild(textminus1);
                buttonkg1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                kg2.appendChild(buttonkg1minus1);
              } else if ($("input[name='CFV[568047]']").parent().parent().css("display") != "flex") {
                kg3.innerText = " ";
                $("input[name='CFV[568047]']").parent().parent().css("display", "flex");
                let buttonkg1minus2 = document.createElement("div");
                buttonkg1minus2.id = "buttonkg1minus2";
                const textminus2 = document.createTextNode("x");
                buttonkg1minus2.appendChild(textminus2);
                buttonkg1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                kg3.appendChild(buttonkg1minus2);
              }
              $("#buttonkg1minus").click(function () {
                if ($("input[name='CFV[568043]']").css("display") == "inline-block") {
                  $("input[name='CFV[568043]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonkg1minus1").click(function () {
                if ($("input[name='CFV[568045]']").css("display") == "inline-block") {
                  $("input[name='CFV[568045]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonkg1minus2").click(function () {
                if ($("input[name='CFV[568047]']").css("display") == "inline-block") {
                  $("input[name='CFV[568047]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568041]']").parent().parent().css("display", "none");
            $("input[name='CFV[568043]']").parent().parent().css("display", "none");
            $("input[name='CFV[568045]']").parent().parent().css("display", "none");
            $("input[name='CFV[568047]']").parent().parent().css("display", "none");
          }
          //СКР
          if ($("input[name='CFV[383011][742313]']").prop("checked")) {
            $("input[name='CFV[568049]']").parent().parent().css("display", "flex");
            let buttonskr1 = document.createElement("div");
            buttonskr1.id = "buttonskr1";
            const textmp = document.createTextNode("+");
            buttonskr1.appendChild(textmp);
            buttonskr1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 101px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            skr.appendChild(buttonskr1);
            $("#buttonskr1").click(function () {
              if ($("input[name='CFV[568051]']").parent().parent().css("display") != "flex") {
                skr1.innerText = " ";
                $("input[name='CFV[568051]']").parent().parent().css("display", "flex");
                let buttonskr1minus = document.createElement("div");
                buttonskr1minus.id = "buttonskr1minus";
                const textminus = document.createTextNode("x");
                buttonskr1minus.appendChild(textminus);
                buttonskr1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                skr1.appendChild(buttonskr1minus);
              } else if ($("input[name='CFV[568053]']").parent().parent().css("display") != "flex") {
                skr2.innerText = " ";
                $("input[name='CFV[568053]']").parent().parent().css("display", "flex");
                let buttonskr1minus1 = document.createElement("div");
                buttonskr1minus1.id = "buttonskr1minus1";
                const textminus1 = document.createTextNode("x");
                buttonskr1minus1.appendChild(textminus1);
                buttonskr1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                skr2.appendChild(buttonskr1minus1);
              } else if ($("input[name='CFV[568055]']").parent().parent().css("display") != "flex") {
                skr3.innerText = " ";
                $("input[name='CFV[568055]']").parent().parent().css("display", "flex");
                let buttonskr1minus2 = document.createElement("div");
                buttonskr1minus2.id = "buttonskr1minus2";
                const textminus2 = document.createTextNode("x");
                buttonskr1minus2.appendChild(textminus2);
                buttonskr1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                skr3.appendChild(buttonskr1minus2);
              }
              $("#buttonskr1minus").click(function () {
                if ($("input[name='CFV[568051]']").css("display") == "inline-block") {
                  $("input[name='CFV[568051]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonskr1minus1").click(function () {
                if ($("input[name='CFV[568053]']").css("display") == "inline-block") {
                  $("input[name='CFV[568053]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonskr1minus2").click(function () {
                if ($("input[name='CFV[568055]']").css("display") == "inline-block") {
                  $("input[name='CFV[568055]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568049]']").parent().parent().css("display", "none");
            $("input[name='CFV[568051]']").parent().parent().css("display", "none");
            $("input[name='CFV[568053]']").parent().parent().css("display", "none");
            $("input[name='CFV[568055]']").parent().parent().css("display", "none");
          }
          //СКН
          if ($("input[name='CFV[383011][742315]']").prop("checked")) {
            $("input[name='CFV[568057]']").parent().parent().css("display", "flex");
            let buttonskn1 = document.createElement("div");
            buttonskn1.id = "buttonskn1";
            const textmp = document.createTextNode("+");
            buttonskn1.appendChild(textmp);
            buttonskn1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 99px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            skn.appendChild(buttonskn1);
            $("#buttonskn1").click(function () {
              if ($("input[name='CFV[568059]']").parent().parent().css("display") != "flex") {
                skn1.innerText = " ";
                $("input[name='CFV[568059]']").parent().parent().css("display", "flex");
                let buttonskn1minus = document.createElement("div");
                buttonskn1minus.id = "buttonskn1minus";
                const textminus = document.createTextNode("x");
                buttonskn1minus.appendChild(textminus);
                buttonskn1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                skn1.appendChild(buttonskn1minus);
              } else if ($("input[name='CFV[568061]']").parent().parent().css("display") != "flex") {
                skn2.innerText = " ";
                $("input[name='CFV[568061]']").parent().parent().css("display", "flex");
                let buttonskn1minus1 = document.createElement("div");
                buttonskn1minus1.id = "buttonskn1minus1";
                const textminus1 = document.createTextNode("x");
                buttonskn1minus1.appendChild(textminus1);
                buttonskn1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                skn2.appendChild(buttonskn1minus1);
              } else if ($("input[name='CFV[568063]']").parent().parent().css("display") != "flex") {
                skn3.innerText = " ";
                $("input[name='CFV[568063]']").parent().parent().css("display", "flex");
                let buttonskn1minus2 = document.createElement("div");
                buttonskn1minus2.id = "buttonskn1minus2";
                const textminus2 = document.createTextNode("x");
                buttonskn1minus2.appendChild(textminus2);
                buttonskn1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                skn3.appendChild(buttonskn1minus2);
              }
              $("#buttonskn1minus").click(function () {
                if ($("input[name='CFV[568059]']").css("display") == "inline-block") {
                  $("input[name='CFV[568059]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonskn1minus1").click(function () {
                if ($("input[name='CFV[568061]']").css("display") == "inline-block") {
                  $("input[name='CFV[568061]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonskn1minus2").click(function () {
                if ($("input[name='CFV[568063]']").css("display") == "inline-block") {
                  $("input[name='CFV[568063]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568057]']").parent().parent().css("display", "none");
            $("input[name='CFV[568059]']").parent().parent().css("display", "none");
            $("input[name='CFV[568061]']").parent().parent().css("display", "none");
            $("input[name='CFV[568063]']").parent().parent().css("display", "none");
          }






        });

        return true;
      },
      init: function () {
        return true;
      },
      bind_actions: function () {

        return true;
      },
      settings: function ($modal_body) { //$modal_body - jquery-объект блока правой части модального окна виджета

        self.getTemplate(
            // 'oferta',
            // {},
            // function (template) {
            //   $modal_body.find('input[name="oferta"]').val(''); // очищаем принудительно поле oferta
            //   $modal_body.find('.widget_settings_block').append(template.render()); // отрисовываем шаблон и добавляем в блок настроек виджета
            //   var $install_btn = $('button.js-widget-install'),
            //       $oferta_error = $('div.oferta_error');
            //   $modal_body.find('input[name="oferta_check"]').on('change', function (e) {
            //
            //     var $checkbox = $(e.currentTarget);
            //     if ($checkbox.prop('checked')) {
            //       $modal_body.find('input[name="oferta"]').val('1'); //заполняем поле oferta, если чекбокс отмечен
            //       $oferta_error.addClass('hidden'); // скрываем предупреждение, если оно отображено
            //     } else {
            //       $modal_body.find('input[name="oferta"]').val(''); // очищаем поле oferta, если не отмечен чекбокс
            //     }
            //   });
            //   //при нажатии на кнопку "Установить", если не отмечен чекбокс, отображаем предупреждение
            //   $install_btn.on('click', function () {
            //     if (!$modal_body.find('input[name="oferta"]').val()) {
            //       $oferta_error.removeClass('hidden');
            //     }
            //   });
            // }
        );
        return true;
      },
      onSave: function () {
        return true;
      },
      destroy: function () {
        return true;
      },
      contacts: {
        selected: function () {
          return true;
        }
      },
      leads: {
        selected: function () {
          return true;
        }
      },
      tasks: {
        selected: function () {
          return true;
        }
      }
    };
    return this;
  };

  return CustomWidget;
});
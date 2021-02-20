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
        $("input[name='CFV[406251]']").parent().parent().css("display", "none");
        $("input[name='CFV[406253]']").parent().parent().css("display", "none");
        $("input[name='CFV[406255]']").parent().parent().css("display", "none");
        $("input[name='CFV[415227]']").parent().parent().css("display", "none");  // поставщик 1.1
        $("input[name='CFV[415231]']").parent().parent().css("display", "none");  // поставщик 1.2
        $("input[name='CFV[415233]']").parent().parent().css("display", "none");  // поставщик 2.1
        $("input[name='CFV[415235]']").parent().parent().css("display", "none");  // поставщик 2.2
        $("input[name='CFV[406249][211725]'], [name='CFV[406249][211727]'], input[name='CFV[406249][211729]']").click(function(e){

          //   // let multiselects = $(".linked-forms__group-wrapper > div > div > span").length;
          //   // for(let i = 0; i < multiselects; i++) {
          //   //   form_pay_parent = $($($(".linked-forms__group-wrapper > div > div > span"))[i]).parent();
          // }
          let pos1,pos11,pos112,pos1123;
          let multiselects = $(".linked-forms__group-wrapper > div > div > span").length;
          for(let i = 0; i < multiselects; i++) {
            form_pay_parent = $($($(".linked-forms__group-wrapper > div > div > span"))[i]).parent();
            // console.log(form_pay_parent.context.innerText);
            if (form_pay_parent.context.innerText == "поставщик 1") {
              pos1 = form_pay_parent.context;
              console.log(pos1.innerText);
            }
            if (form_pay_parent.context.innerText == "поставщик 1.1")
              pos11=form_pay_parent.context;
            if (form_pay_parent.context.innerText == "поставщик 1.2")
              pos112=form_pay_parent.context;
            if (form_pay_parent.context.innerText == "поставщик 2.1")
              pos1123=form_pay_parent.context;
          }
            if ($("input[name='CFV[406249][211725]']").prop("checked")) {
              $("input[name='CFV[406251]']").parent().parent().css("display", "flex");
              let button1 = document.createElement("div");
              button1.id = "button1";
              const text = document.createTextNode("+");
              button1.appendChild(text);
              button1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 45px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
              pos1.appendChild(button1);
              $("#button1").click(function () {
                if ($("input[name='CFV[415227]']").parent().parent().css("display") != "inline-block") {
                  pos11.innerText = " ";
                  $("input[name='CFV[415227]']").parent().parent().css("display", "flex");
                  let button1minus = document.createElement("div");
                  button1minus.id = "button1minus";
                  const textminus = document.createTextNode("x");
                  button1minus.appendChild(textminus);
                  button1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                  pos11.appendChild(button1minus);
                }
                $("#button1minus").click(function () {
                  if ($("input[name='CFV[415227]']").css("display") == "inline-block") {
                    $("input[name='CFV[415227]']").parent().parent().css("display", "none");
                  }
                });
                if ($("input[name='CFV[415231]']").parent().parent().css("display") != "inline-block") {
                  pos112.innerText = " ";
                  $("input[name='CFV[415231]']").parent().parent().css("display", "flex");
                  let button1minus1 = document.createElement("div");
                  button1minus1.id = "button1minus1";
                  const textminus1 = document.createTextNode("x");
                  button1minus1.appendChild(textminus1);
                  button1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                  pos112.appendChild(button1minus1);
                }
                $("#button1minus1").click(function () {
                  if ($("input[name='CFV[415231]']").css("display") == "inline-block") {
                    $("input[name='CFV[415231]']").parent().parent().css("display", "none");
                  }
                });
                if ($("input[name='CFV[415233]']").parent().parent().css("display") != "inline-block") {
                  pos1123.innerText = " ";
                  $("input[name='CFV[415233]']").parent().parent().css("display", "flex");
                  let button1minus2 = document.createElement("div");
                  button1minus2.id = "button1minus2";
                  const textminus2 = document.createTextNode("x");
                  button1minus2.appendChild(textminus2);
                  button1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                  pos1123.appendChild(button1minus2);
                }
                $("#button1minus2").click(function () {
                  if ($("input[name='CFV[415233]']").css("display") == "inline-block") {
                    $("input[name='CFV[415233]']").parent().parent().css("display", "none");
                  }
                });

              });
            } else {
              $("input[name='CFV[406251]']").parent().parent().css("display", "none");
              $("input[name='CFV[415227]']").parent().parent().css("display", "none");
              $("input[name='CFV[415231]']").parent().parent().css("display", "none");
            }

              // if ($("input[name='CFV[406249][211727]']").prop("checked")) {
              //   $("input[name='CFV[406253]']").parent().parent().css("display", "flex");
              //   var div = document.getElementsByClassName("linked-form__field__label")[13];
              //   var spans = div.getElementsByTagName("span");
              //   if (spans[0].innerText == "поставщик 2") {
              //     let button1 = document.createElement("div");
              //     button1.id = "button1";
              //     const text = document.createTextNode("+");
              //     text.style = "padding: 20px;font-weight: bold;font-size: 11pt;";
              //     button1.appendChild(text);
              //     button1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 45px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
              //     spans[0].appendChild(button1);
              //     let i = 0;
              //     $("#button1").click(function () {
              //       if (i == 0) {
              //         var div = document.getElementsByClassName("linked-form__field__label")[14];
              //         var spans = div.getElementsByTagName("span");
              //         spans[0].innerText = " ";
              //         $("input[name='CFV[415233]']").parent().parent().css("display", "flex");
              //         let button1minus = document.createElement("div");
              //         button1minus.id = "button1minus";
              //         const textminus = document.createTextNode("x");
              //         button1minus.appendChild(textminus);
              //         button1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              //         spans[0].appendChild(button1minus);
              //         $("#button1minus").click(function () {
              //           $("input[name='CFV[415233]']").parent().parent().css("display", "none");
              //           i = i - 1;
              //         });
              //       }
              //       if (i == 1) {
              //         var div = document.getElementsByClassName("linked-form__field__label")[15];
              //         var spans = div.getElementsByTagName("span");
              //         spans[0].innerText = " ";
              //         $("input[name='CFV[415235]']").parent().parent().css("display", "flex");
              //         let button1minus1 = document.createElement("div");
              //         button1minus1.id = "button1minus1";
              //         const textminus = document.createTextNode("x");
              //         button1minus1.appendChild(textminus);
              //         button1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              //         spans[0].appendChild(button1minus1);
              //         $("#button1minus1").click(function () {
              //           $("input[name='CFV[415235]']").parent().parent().css("display", "none");
              //           i = i - 1;
              //         });
              //       }
              //       if (i <= 1) {
              //         i = i + 1;
              //       }
              //
              //     });
              //
              //   }
              // } else {
              //   $("input[name='CFV[406253]']").parent().parent().css("display", "none");
              //   $("input[name='CFV[415233]']").parent().parent().css("display", "none");
              //   $("input[name='CFV[415235]']").parent().parent().css("display", "none");
              // }
              if ($("input[name='CFV[406249][211729]']").prop("checked")) {
                $("input[name='CFV[406255]']").parent().parent().css("display", "flex");
              } else {
                $("input[name='CFV[406255]']").parent().parent().css("display", "none");
              }


        });


        // var div = document.getElementsByClassName("linked-form__field__label")[11];
        // var spans = div.getElementsByTagName("span");
        //
        // for(i=0;i<spans.length;i++)
        // {
        //   if (spans[i].innerText == "поставщик 2"){
        //     alert(spans[i].innerText + " Это innerText");
        //     spans[i].innerText = " ";
        //   }
        //   if (spans[i].innerHTML == "поставщик 2"){
        //     alert(spans[i].innerHTML + " Это innerHTML");
        //     spans[i].css("visibility", "hidden");
        //   }
        //   if (spans[i].textContent == "поставщик 2"){
        //     alert(spans[i].textContent + " Это textContent");
        //     spans[i].css("visibility", "hidden");
        //   }



        // if (spans[i].innerHTML == "поставщик 2"){
        //   spans.css("visibility", "hidden");
        //   alert(spans[i].innerHTML);
        // }
        //([...document.querySelectorAll('#test span')]).map(x => console.log(x.innerHTML))


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
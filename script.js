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

        $("input[name='CFV[568159]']").parent().parent().css("display", "none");  // СибирскийБизнес
        $("input[name='CFV[568161]']").parent().parent().css("display", "none");  // сб1
        $("input[name='CFV[568163]']").parent().parent().css("display", "none");  // сб2
        $("input[name='CFV[568165]']").parent().parent().css("display", "none");  // сб3

        $("input[name='CFV[568167]']").parent().parent().css("display", "none");  // СибТеплоКомплект
        $("input[name='CFV[568169]']").parent().parent().css("display", "none");  // стк1
        $("input[name='CFV[568171]']").parent().parent().css("display", "none");  // стк2
        $("input[name='CFV[568173]']").parent().parent().css("display", "none");  // стк3

        $("input[name='CFV[568175]']").parent().parent().css("display", "none");  // Максикров
        $("input[name='CFV[568177]']").parent().parent().css("display", "none");  // мак1
        $("input[name='CFV[568179]']").parent().parent().css("display", "none");  // мак2
        $("input[name='CFV[568181]']").parent().parent().css("display", "none");  // мак3

        $("input[name='CFV[568183]']").parent().parent().css("display", "none");  // Тегола
        $("input[name='CFV[568185]']").parent().parent().css("display", "none");  // тег1
        $("input[name='CFV[568187]']").parent().parent().css("display", "none");  // тег2
        $("input[name='CFV[568189]']").parent().parent().css("display", "none");  // тег3

        $("input[name='CFV[568191]']").parent().parent().css("display", "none");  // ИрПласт
        $("input[name='CFV[568193]']").parent().parent().css("display", "none");  // ир1
        $("input[name='CFV[568195]']").parent().parent().css("display", "none");  // ир1
        $("input[name='CFV[568197]']").parent().parent().css("display", "none");  // ир1

        $("input[name='CFV[568199]']").parent().parent().css("display", "none");  // 5Веков
        $("input[name='CFV[568201]']").parent().parent().css("display", "none");  // век1
        $("input[name='CFV[568203]']").parent().parent().css("display", "none");  // век2
        $("input[name='CFV[568205]']").parent().parent().css("display", "none");  // век3

        $("input[name='CFV[568207]']").parent().parent().css("display", "none");  // ЕКТ
        $("input[name='CFV[568209]']").parent().parent().css("display", "none");  // ект1
        $("input[name='CFV[568211]']").parent().parent().css("display", "none");  // ект2
        $("input[name='CFV[568213]']").parent().parent().css("display", "none");  // ект3

        $("input[name='CFV[568215]']").parent().parent().css("display", "none");  // СПК
        $("input[name='CFV[568217]']").parent().parent().css("display", "none");  // спк1
        $("input[name='CFV[568219]']").parent().parent().css("display", "none");  // спк2
        $("input[name='CFV[568221]']").parent().parent().css("display", "none");  // спк3

        $("input[name='CFV[568223]']").parent().parent().css("display", "none");  // Профит
        $("input[name='CFV[568225]']").parent().parent().css("display", "none");  // пт1
        $("input[name='CFV[568227]']").parent().parent().css("display", "none");  // пт2
        $("input[name='CFV[568229]']").parent().parent().css("display", "none");  // пт3

        $("input[name='CFV[568231]']").parent().parent().css("display", "none");  // ПластикИКрепеж
        $("input[name='CFV[568233]']").parent().parent().css("display", "none");  // пк1
        $("input[name='CFV[568235]']").parent().parent().css("display", "none");  // пк2
        $("input[name='CFV[568237]']").parent().parent().css("display", "none");  // пк3

        $("input[name='CFV[568239]']").parent().parent().css("display", "none");  // Русклимат
        $("input[name='CFV[568241]']").parent().parent().css("display", "none");  // rs1
        $("input[name='CFV[568243]']").parent().parent().css("display", "none");  // rs2
        $("input[name='CFV[568245]']").parent().parent().css("display", "none");  // rs3

        $("input[name='CFV[568247]']").parent().parent().css("display", "none");  // Юпласт
        $("input[name='CFV[568249]']").parent().parent().css("display", "none");  // юп1
        $("input[name='CFV[568251]']").parent().parent().css("display", "none");  // юп2
        $("input[name='CFV[568253]']").parent().parent().css("display", "none");  // юп3

        $("input[name='CFV[568255]']").parent().parent().css("display", "none");  // Gекса
        $("input[name='CFV[568257]']").parent().parent().css("display", "none");  // гк1
        $("input[name='CFV[568259]']").parent().parent().css("display", "none");  // гк1
        $("input[name='CFV[568261]']").parent().parent().css("display", "none");  // гк1

        $("input[name='CFV[568263]']").parent().parent().css("display", "none");  // Фитинг24
        $("input[name='CFV[568265]']").parent().parent().css("display", "none");  // ft1
        $("input[name='CFV[568267]']").parent().parent().css("display", "none");  // ft2
        $("input[name='CFV[568269]']").parent().parent().css("display", "none");  // ft3

        $("input[name='CFV[568271]']").parent().parent().css("display", "none");  // GenПоставка
        $("input[name='CFV[568273]']").parent().parent().css("display", "none");  // гп1
        $("input[name='CFV[568275]']").parent().parent().css("display", "none");  // гп2
        $("input[name='CFV[568277]']").parent().parent().css("display", "none");  // гп3

        $("input[name='CFV[568279]']").parent().parent().css("display", "none");  // Маяк
        $("input[name='CFV[568281]']").parent().parent().css("display", "none");  // ма1
        $("input[name='CFV[568283]']").parent().parent().css("display", "none");  // ма2
        $("input[name='CFV[568285]']").parent().parent().css("display", "none");  // ма3

        $("input[name='CFV[568287]']").parent().parent().css("display", "none");  // Феррум
        $("input[name='CFV[568289]']").parent().parent().css("display", "none");  // fe1
        $("input[name='CFV[568291]']").parent().parent().css("display", "none");  // fe2
        $("input[name='CFV[568293]']").parent().parent().css("display", "none");  // fe3

        $("input[name='CFV[568295]']").parent().parent().css("display", "none");  // ТеплоCom
        $("input[name='CFV[568297]']").parent().parent().css("display", "none");  // тк1
        $("input[name='CFV[568303]']").parent().parent().css("display", "none");  // тк2
        $("input[name='CFV[568301]']").parent().parent().css("display", "none");  // тк3

        $("input[name='CFV[568305]']").parent().parent().css("display", "none");  // Современныеокна
        $("input[name='CFV[568307]']").parent().parent().css("display", "none");  // со1
        $("input[name='CFV[568309]']").parent().parent().css("display", "none");  // со2
        $("input[name='CFV[568311]']").parent().parent().css("display", "none");  // со3

        $("input[name='CFV[568313]']").parent().parent().css("display", "none");  // Полимет
        $("input[name='CFV[568315]']").parent().parent().css("display", "none");  // по1
        $("input[name='CFV[568317]']").parent().parent().css("display", "none");  // по2
        $("input[name='CFV[568319]']").parent().parent().css("display", "none");  // по3

        $("input[name='CFV[568321]']").parent().parent().css("display", "none");  // Finestra
        $("input[name='CFV[568323]']").parent().parent().css("display", "none");  // фи1
        $("input[name='CFV[568325]']").parent().parent().css("display", "none");  // фи2
        $("input[name='CFV[568327]']").parent().parent().css("display", "none");  // фи3

        $("input[name='CFV[568329]']").parent().parent().css("display", "none");  // ТехноНиколь
        $("input[name='CFV[568331]']").parent().parent().css("display", "none");  // tn1
        $("input[name='CFV[568333]']").parent().parent().css("display", "none");  // tn2
        $("input[name='CFV[568335]']").parent().parent().css("display", "none");  // tn3

        $("input[name='CFV[568337]']").parent().parent().css("display", "none");  // Vodolei
        $("input[name='CFV[568339]']").parent().parent().css("display", "none");  // vo1
        $("input[name='CFV[568341]']").parent().parent().css("display", "none");  // vo2
        $("input[name='CFV[568343]']").parent().parent().css("display", "none");  // vo3

        $("input[name='CFV[568345]']").parent().parent().css("display", "none");  // Ambar
        $("input[name='CFV[568347]']").parent().parent().css("display", "none");  // am1
        $("input[name='CFV[568349]']").parent().parent().css("display", "none");  // am2
        $("input[name='CFV[568351]']").parent().parent().css("display", "none");  // am3

        $("input[name='CFV[568353]']").parent().parent().css("display", "none");  // Saturn
        $("input[name='CFV[568355]']").parent().parent().css("display", "none");  // sa1
        $("input[name='CFV[568357]']").parent().parent().css("display", "none");  // sa2
        $("input[name='CFV[568359]']").parent().parent().css("display", "none");  // sa3

        $("input[name='CFV[568361]']").parent().parent().css("display", "none");  // СКМ-мебель
        $("input[name='CFV[568363]']").parent().parent().css("display", "none");  // sk1
        $("input[name='CFV[568365]']").parent().parent().css("display", "none");  // sk2
        $("input[name='CFV[568367]']").parent().parent().css("display", "none");  // sk3

        $("input[name='CFV[568369]']").parent().parent().css("display", "none");  // Teplodar
        $("input[name='CFV[568371]']").parent().parent().css("display", "none");  // тп1
        $("input[name='CFV[568373]']").parent().parent().css("display", "none");  // тп2
        $("input[name='CFV[568375]']").parent().parent().css("display", "none");  // тп3

        $("input[name='CFV[568377]']").parent().parent().css("display", "none");  // AgroТитан
        $("input[name='CFV[568379]']").parent().parent().css("display", "none");  // at1
        $("input[name='CFV[568381]']").parent().parent().css("display", "none");  // at2
        $("input[name='CFV[568383]']").parent().parent().css("display", "none");  // at3

        $("input[name='CFV[568385]']").parent().parent().css("display", "none");  // FasadИнжиниринг
        $("input[name='CFV[568387]']").parent().parent().css("display", "none");  // fa1
        $("input[name='CFV[568389]']").parent().parent().css("display", "none");  // fa2
        $("input[name='CFV[568391]']").parent().parent().css("display", "none");  // fa3

        let saltlight, saltlight1, saltlight2, saltlight3, mp, mp1, mp2, mp3, mrp, mrp1,mrp2,mrp3,ar,ar1,ar2,ar3,kg,kg1,kg2,kg3,skr,skr1,skr2,skr3,skn,skn1,skn2,skn3,sb,sb1,sb2,sb3,sbk,sbk1,sbk2,sbk3,mak,mak1,mak2,mak3,teg,teg1,teg2,teg3,ir,ir1,ir2,ir3,vek,vek1,vek2,vek3,ekt,ekt1,ekt2,ekt3,spk,spk1,spk2,spk3,pt,pt1,pt2,pt3,pk,pk1,pk2,pk3,rs,rs1,rs2,rs3,yu,yu1,yu2,yu3,gk,gk1,gk2,gk3,ft,ft1,ft2,ft3,gp,gp1,gp2,gp3,ma,ma1,ma2,ma3,fe,fe1,fe2,fe3,tk,tk1,tk2,tk3,so,so1,so2,so3,po,po1,po2,po3,fi,fi1,fi2,fi3,tn,tn1,tn2,tn3,vo,vo1,vo2,vo3,am,am1,am2,am3,sa,sa1,sa2,sa3,sk,sk1,sk2,sk3,tp,tp1,tp2,tp3,at,at1,at2,at3,fa,fa1,fa2,fa3;
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
          //СибирскийБизнес
          if (form_pay_parent.context.innerText == "СибирскийБизнес") {
            sb = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "сб1")
            sb1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "сб2")
            sb2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "сб3")
            sb3 = form_pay_parent.context;
          //СибТеплоКомплект
          if (form_pay_parent.context.innerText == "СибТеплоКом") {
            sbk = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "сбк1")
            sbk1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "сбк2")
            sbk2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "сбк3")
            sbk3 = form_pay_parent.context;
          //Максикров
          if (form_pay_parent.context.innerText == "Makсикров") {
            mak = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "мак1")
            mak1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "мак2")
            mak2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "мак3")
            mak3 = form_pay_parent.context;
          //Тегола
          if (form_pay_parent.context.innerText == "Teгола") {
            teg = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "тег1")
            teg1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "тег2")
            teg2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "тег3")
            teg3 = form_pay_parent.context;
          //ИрПласт
          if (form_pay_parent.context.innerText == "ИpПласт") {
            ir = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "ир1")
            ir1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ир2")
            ir2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ир3")
            ir3 = form_pay_parent.context;
          //5Веков
          if (form_pay_parent.context.innerText == "5Веков") {
            vek = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "век1")
            vek1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "век2")
            vek2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "век3")
            vek3 = form_pay_parent.context;
          //ЕКТ
          if (form_pay_parent.context.innerText == "EKT") {
            ekt = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "ект1")
            ekt1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ект2")
            ekt2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ект3")
            ekt3 = form_pay_parent.context;
          //СПК
          if (form_pay_parent.context.innerText == "SPK") {
            spk = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "спк1")
            spk1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "спк2")
            spk2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "спк3")
            spk3 = form_pay_parent.context;
          //Профит
          if (form_pay_parent.context.innerText == "Proфит") {
            pt = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "пт1")
            pt1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "пт2")
            pt2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "пт3")
            pt3 = form_pay_parent.context;
          //ПластикИКрепеж
          if (form_pay_parent.context.innerText == "ПластикИКрепеж") {
            pk = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "пк1")
            pk1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "пк2")
            pk2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "пк3")
            pk3 = form_pay_parent.context;
          //Русклимат
          if (form_pay_parent.context.innerText == "Pycклимат") {
            rs = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "rs1")
            rs1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "rs2")
            rs2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "rs3")
            rs3 = form_pay_parent.context;
          //Юпласт
          if (form_pay_parent.context.innerText == "Юпласт") {
            yu = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "юп1")
            yu1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "юп2")
            yu2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "юп3")
            yu3 = form_pay_parent.context;
          //Гекса
          if (form_pay_parent.context.innerText == "Gекса") {
            gk = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "гк1")
            gk1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "гк2")
            gk2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "гк3")
            gk3 = form_pay_parent.context;
          //Фитинг24
          if (form_pay_parent.context.innerText == "Фитинг24") {
            ft = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "фт1")
            ft1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "фт2")
            ft2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "фт3")
            ft3 = form_pay_parent.context;
          //ГенПоставка
          if (form_pay_parent.context.innerText == "GenПоставка") {
            gp = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "гп1")
            gp1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "гп2")
            gp2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "гп3")
            gp3 = form_pay_parent.context;
          //Маяк
          if (form_pay_parent.context.innerText == "Mayak") {
            ma = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "ма1")
            ma1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ма2")
            ma2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ма3")
            ma3 = form_pay_parent.context;
          //Ferrum
          if (form_pay_parent.context.innerText == "Ferrum") {
            fe = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "fe1")
            fe1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "fe2")
            fe2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "fe3")
            fe3 = form_pay_parent.context;
          //Современныеокна
          if (form_pay_parent.context.innerText == "Современныеокна") {
            so = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "со1")
            so1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "со2")
            so2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "со3")
            so3 = form_pay_parent.context;
          //ТеплоCom
          if (form_pay_parent.context.innerText == "ТеплоCom") {
            tk = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "тк1")
            tk1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "тк2")
            tk2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "тк3")
            tk3 = form_pay_parent.context;
          //Полимет
          if (form_pay_parent.context.innerText == "Polimet") {
            po = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "по1")
            po1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "по2")
            po2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "по3")
            po3 = form_pay_parent.context;
          //Finestra
          if (form_pay_parent.context.innerText == "Finestra") {
            fi = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "фи1")
            fi1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "фи2")
            fi2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "фи3")
            fi3 = form_pay_parent.context;
          //TexnoНиколь
          if (form_pay_parent.context.innerText == "TexnoНиколь") {
            tn = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "tn1")
            tn1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "tn2")
            tn2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "tn3")
            tn3 = form_pay_parent.context;
          //Vodolei
          if (form_pay_parent.context.innerText == "Vodolei") {
            vo = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "во1")
            vo1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "во2")
            vo2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "во3")
            vo3 = form_pay_parent.context;
          //Ambar
          if (form_pay_parent.context.innerText == "Ambar") {
            am = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "ам1")
            am1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ам2")
            am2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ам3")
            am3 = form_pay_parent.context;
          //Saturn
          if (form_pay_parent.context.innerText == "Saturn") {
            sa = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "са1")
            sa1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "са2")
            sa2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "са3")
            sa3 = form_pay_parent.context;
          //SKM-мебель
          if (form_pay_parent.context.innerText == "SKM-мебель") {
            sk = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "ск1")
            sk1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ск2")
            sk2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "ск3")
            sk3 = form_pay_parent.context;
          //Teplodar
          if (form_pay_parent.context.innerText == "Teplodar") {
            tp = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "тп1")
            tp1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "тп2")
            tp2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "тп3")
            tp3 = form_pay_parent.context;
          //AgroТитан
          if (form_pay_parent.context.innerText == "AgroТитан") {
            at = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "at1")
            at1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "at2")
            at2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "at3")
            at3 = form_pay_parent.context;
          //FasadИнжиниринг
          if (form_pay_parent.context.innerText == "FasadИнжиниринг") {
            fa = form_pay_parent.context;
          }
          if (form_pay_parent.context.innerText == "fa1")
            fa1 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "fa2")
            fa2 = form_pay_parent.context;
          if (form_pay_parent.context.innerText == "fa3")
            fa3 = form_pay_parent.context;

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
        //Сибирский Бизнес
        if ($("input[name='CFV[383011][742317]']").prop("checked")) {
          $("input[name='CFV[568159]']").parent().parent().css("display", "flex");
          let buttonsb1 = document.createElement("div");
          buttonsb1.id = "buttonsb1";
          const textmp = document.createTextNode("+");
          buttonsb1.appendChild(textmp);
          buttonsb1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 10px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          sb.appendChild(buttonsb1);
          $("#buttonskn1").click(function () {
            if ($("input[name='CFV[568161]']").parent().parent().css("display") != "flex") {
              sb1.innerText = " ";
              $("input[name='CFV[568161]']").parent().parent().css("display", "flex");
              let buttonsb1minus = document.createElement("div");
              buttonsb1minus.id = "buttonsb1minus";
              const textminus = document.createTextNode("x");
              buttonsb1minus.appendChild(textminus);
              buttonsb1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sb1.appendChild(buttonsb1minus);
            } else if ($("input[name='CFV[568163]']").parent().parent().css("display") != "flex") {
              sb2.innerText = " ";
              $("input[name='CFV[568163]']").parent().parent().css("display", "flex");
              let buttonsb1minus1 = document.createElement("div");
              buttonsb1minus1.id = "buttonsb1minus1";
              const textminus1 = document.createTextNode("x");
              buttonsb1minus1.appendChild(textminus1);
              buttonsb1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sb2.appendChild(buttonsb1minus1);
            } else if ($("input[name='CFV[568165]']").parent().parent().css("display") != "flex") {
              sb3.innerText = " ";
              $("input[name='CFV[568165]']").parent().parent().css("display", "flex");
              let buttonsb1minus2 = document.createElement("div");
              buttonsb1minus2.id = "buttonsb1minus2";
              const textminus2 = document.createTextNode("x");
              buttonsb1minus2.appendChild(textminus2);
              buttonsb1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sb3.appendChild(buttonsb1minus2);
            }
            $("#buttonsb1minus").click(function () {
              if ($("input[name='CFV[568161]']").css("display") == "inline-block") {
                $("input[name='CFV[568161]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonsb1minus1").click(function () {
              if ($("input[name='CFV[568163]']").css("display") == "inline-block") {
                $("input[name='CFV[568163]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonsb1minus2").click(function () {
              if ($("input[name='CFV[568165]']").css("display") == "inline-block") {
                $("input[name='CFV[568165]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568159]']").parent().parent().css("display", "none");
          $("input[name='CFV[568161]']").parent().parent().css("display", "none");
          $("input[name='CFV[568163]']").parent().parent().css("display", "none");
          $("input[name='CFV[568165]']").parent().parent().css("display", "none");
        }
        //СибТеплоКомплект
        if ($("input[name='CFV[383011][742319]']").prop("checked")) {
          $("input[name='CFV[568167]']").parent().parent().css("display", "flex");
          let buttonsbk1 = document.createElement("div");
          buttonsbk1.id = "buttonsbk1";
          const textmp = document.createTextNode("+");
          buttonsbk1.appendChild(textmp);
          buttonsbk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 39px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          sbk.appendChild(buttonsbk1);
          $("#buttonsbk1").click(function () {
            if ($("input[name='CFV[568169]']").parent().parent().css("display") != "flex") {
              sbk1.innerText = " ";
              $("input[name='CFV[568169]']").parent().parent().css("display", "flex");
              let buttonsbk1minus = document.createElement("div");
              buttonsbk1minus.id = "buttonsbk1minus";
              const textminus = document.createTextNode("x");
              buttonsbk1minus.appendChild(textminus);
              buttonsbk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sbk1.appendChild(buttonsbk1minus);
            } else if ($("input[name='CFV[568171]']").parent().parent().css("display") != "flex") {
              sbk2.innerText = " ";
              $("input[name='CFV[568171]']").parent().parent().css("display", "flex");
              let buttonsbk1minus1 = document.createElement("div");
              buttonsbk1minus1.id = "buttonsbk1minus1";
              const textminus1 = document.createTextNode("x");
              buttonsbk1minus1.appendChild(textminus1);
              buttonsbk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sbk2.appendChild(buttonsbk1minus1);
            } else if ($("input[name='CFV[568173]']").parent().parent().css("display") != "flex") {
              sbk3.innerText = " ";
              $("input[name='CFV[568173]']").parent().parent().css("display", "flex");
              let buttonsbk1minus2 = document.createElement("div");
              buttonsbk1minus2.id = "buttonsbk1minus2";
              const textminus2 = document.createTextNode("x");
              buttonsbk1minus2.appendChild(textminus2);
              buttonsbk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sbk3.appendChild(buttonsbk1minus2);
            }
            $("#buttonsbk1minus").click(function () {
              if ($("input[name='CFV[568169]']").css("display") == "inline-block") {
                $("input[name='CFV[568169]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonsbk1minus1").click(function () {
              if ($("input[name='CFV[568171]']").css("display") == "inline-block") {
                $("input[name='CFV[568171]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonsbk1minus2").click(function () {
              if ($("input[name='CFV[568173]']").css("display") == "inline-block") {
                $("input[name='CFV[568173]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568167]']").parent().parent().css("display", "none");
          $("input[name='CFV[568169]']").parent().parent().css("display", "none");
          $("input[name='CFV[568171]']").parent().parent().css("display", "none");
          $("input[name='CFV[568173]']").parent().parent().css("display", "none");
        }
        //Максикров
        if ($("input[name='CFV[383011][742321]']").prop("checked")) {
          $("input[name='CFV[568175]']").parent().parent().css("display", "flex");
          let buttonmak1 = document.createElement("div");
          buttonmak1.id = "buttonmak1";
          const textmp = document.createTextNode("+");
          buttonmak1.appendChild(textmp);
          buttonmak1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 55px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          mak.appendChild(buttonmak1);
          $("#buttonmak1").click(function () {
            if ($("input[name='CFV[568177]']").parent().parent().css("display") != "flex") {
              mak1.innerText = " ";
              $("input[name='CFV[568177]']").parent().parent().css("display", "flex");
              let buttonmak1minus = document.createElement("div");
              buttonmak1minus.id = "buttonmak1minus";
              const textminus = document.createTextNode("x");
              buttonmak1minus.appendChild(textminus);
              buttonmak1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              mak1.appendChild(buttonmak1minus);
            } else if ($("input[name='CFV[568179]']").parent().parent().css("display") != "flex") {
              mak2.innerText = " ";
              $("input[name='CFV[568179]']").parent().parent().css("display", "flex");
              let buttonmak1minus1 = document.createElement("div");
              buttonmak1minus1.id = "buttonmak1minus1";
              const textminus1 = document.createTextNode("x");
              buttonmak1minus1.appendChild(textminus1);
              buttonmak1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              mak2.appendChild(buttonmak1minus1);
            } else if ($("input[name='CFV[568181]']").parent().parent().css("display") != "flex") {
              mak3.innerText = " ";
              $("input[name='CFV[568181]']").parent().parent().css("display", "flex");
              let buttonmak1minus2 = document.createElement("div");
              buttonmak1minus2.id = "buttonmak1minus2";
              const textminus2 = document.createTextNode("x");
              buttonmak1minus2.appendChild(textminus2);
              buttonmak1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              mak3.appendChild(buttonmak1minus2);
            }
            $("#buttonmak1minus").click(function () {
              if ($("input[name='CFV[568177]']").css("display") == "inline-block") {
                $("input[name='CFV[568177]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonmak1minus1").click(function () {
              if ($("input[name='CFV[568179]']").css("display") == "inline-block") {
                $("input[name='CFV[568179]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonmak1minus2").click(function () {
              if ($("input[name='CFV[568181]']").css("display") == "inline-block") {
                $("input[name='CFV[568181]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568175]']").parent().parent().css("display", "none");
          $("input[name='CFV[568177]']").parent().parent().css("display", "none");
          $("input[name='CFV[568179]']").parent().parent().css("display", "none");
          $("input[name='CFV[568181]']").parent().parent().css("display", "none");
        }
        //Тегола
        if ($("input[name='CFV[383011][742323]']").prop("checked")) {
          $("input[name='CFV[568183]']").parent().parent().css("display", "flex");
          let buttonteg1 = document.createElement("div");
          buttonteg1.id = "buttonteg1";
          const textmp = document.createTextNode("+");
          buttonteg1.appendChild(textmp);
          buttonteg1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 85px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          teg.appendChild(buttonteg1);
          $("#buttonteg1").click(function () {
            if ($("input[name='CFV[568185]']").parent().parent().css("display") != "flex") {
              teg1.innerText = " ";
              $("input[name='CFV[568185]']").parent().parent().css("display", "flex");
              let buttonteg1minus = document.createElement("div");
              buttonteg1minus.id = "buttonteg1minus";
              const textminus = document.createTextNode("x");
              buttonteg1minus.appendChild(textminus);
              buttonteg1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              teg1.appendChild(buttonteg1minus);
            } else if ($("input[name='CFV[568187]']").parent().parent().css("display") != "flex") {
              teg2.innerText = " ";
              $("input[name='CFV[568187]']").parent().parent().css("display", "flex");
              let buttonteg1minus1 = document.createElement("div");
              buttonteg1minus1.id = "buttonteg1minus1";
              const textminus1 = document.createTextNode("x");
              buttonteg1minus1.appendChild(textminus1);
              buttonteg1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              teg2.appendChild(buttonteg1minus1);
            } else if ($("input[name='CFV[568189]']").parent().parent().css("display") != "flex") {
              teg3.innerText = " ";
              $("input[name='CFV[568189]']").parent().parent().css("display", "flex");
              let buttonteg1minus2 = document.createElement("div");
              buttonteg1minus2.id = "buttonteg1minus2";
              const textminus2 = document.createTextNode("x");
              buttonteg1minus2.appendChild(textminus2);
              buttonteg1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              teg3.appendChild(buttonteg1minus2);
            }
            $("#buttonteg1minus").click(function () {
              if ($("input[name='CFV[568185]']").css("display") == "inline-block") {
                $("input[name='CFV[568185]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonteg1minus1").click(function () {
              if ($("input[name='CFV[568187]']").css("display") == "inline-block") {
                $("input[name='CFV[568187]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonteg1minus2").click(function () {
              if ($("input[name='CFV[568189]']").css("display") == "inline-block") {
                $("input[name='CFV[568189]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568183]']").parent().parent().css("display", "none");
          $("input[name='CFV[568185]']").parent().parent().css("display", "none");
          $("input[name='CFV[568187]']").parent().parent().css("display", "none");
          $("input[name='CFV[568189]']").parent().parent().css("display", "none");
        }
        //ИрПласт
        if ($("input[name='CFV[383011][742325]']").prop("checked")) {
          $("input[name='CFV[568191]']").parent().parent().css("display", "flex");
          let buttonir1 = document.createElement("div");
          buttonir1.id = "buttonir1";
          const textmp = document.createTextNode("+");
          buttonir1.appendChild(textmp);
          buttonir1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 71px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          ir.appendChild(buttonir1);
          $("#buttonir1").click(function () {
            if ($("input[name='CFV[568193]']").parent().parent().css("display") != "flex") {
              ir1.innerText = " ";
              $("input[name='CFV[568193]']").parent().parent().css("display", "flex");
              let buttonir1minus = document.createElement("div");
              buttonir1minus.id = "buttonir1minus";
              const textminus = document.createTextNode("x");
              buttonir1minus.appendChild(textminus);
              buttonir1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ir1.appendChild(buttonir1minus);
            } else if ($("input[name='CFV[568195]']").parent().parent().css("display") != "flex") {
              ir2.innerText = " ";
              $("input[name='CFV[568195]']").parent().parent().css("display", "flex");
              let buttonir1minus1 = document.createElement("div");
              buttonir1minus1.id = "buttonir1minus1";
              const textminus1 = document.createTextNode("x");
              buttonir1minus1.appendChild(textminus1);
              buttonir1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ir2.appendChild(buttonir1minus1);
            } else if ($("input[name='CFV[568197]']").parent().parent().css("display") != "flex") {
              ir3.innerText = " ";
              $("input[name='CFV[568197]']").parent().parent().css("display", "flex");
              let buttonir1minus2 = document.createElement("div");
              buttonir1minus2.id = "buttonir1minus2";
              const textminus2 = document.createTextNode("x");
              buttonir1minus2.appendChild(textminus2);
              buttonir1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ir3.appendChild(buttonir1minus2);
            }
            $("#buttonir1minus").click(function () {
              if ($("input[name='CFV[568193]']").css("display") == "inline-block") {
                $("input[name='CFV[568193]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonir1minus1").click(function () {
              if ($("input[name='CFV[568195]']").css("display") == "inline-block") {
                $("input[name='CFV[568195]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonir1minus2").click(function () {
              if ($("input[name='CFV[568197]']").css("display") == "inline-block") {
                $("input[name='CFV[568197]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568191]']").parent().parent().css("display", "none");
          $("input[name='CFV[568193]']").parent().parent().css("display", "none");
          $("input[name='CFV[568195]']").parent().parent().css("display", "none");
          $("input[name='CFV[568197]']").parent().parent().css("display", "none");
        }
        //5 Веков
        if ($("input[name='CFV[383011][742327]']").prop("checked")) {
          $("input[name='CFV[568199]']").parent().parent().css("display", "flex");
          let buttonvek1 = document.createElement("div");
          buttonvek1.id = "buttonvek1";
          const textmp = document.createTextNode("+");
          buttonvek1.appendChild(textmp);
          buttonvek1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 80px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          vek.appendChild(buttonvek1);
          $("#buttonvek1").click(function () {
            if ($("input[name='CFV[568201]']").parent().parent().css("display") != "flex") {
              vek1.innerText = " ";
              $("input[name='CFV[568201]']").parent().parent().css("display", "flex");
              let buttonvek1minus = document.createElement("div");
              buttonvek1minus.id = "buttonvek1minus";
              const textminus = document.createTextNode("x");
              buttonvek1minus.appendChild(textminus);
              buttonvek1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              vek1.appendChild(buttonvek1minus);
            } else if ($("input[name='CFV[568203]']").parent().parent().css("display") != "flex") {
              vek2.innerText = " ";
              $("input[name='CFV[568203]']").parent().parent().css("display", "flex");
              let buttonvek1minus1 = document.createElement("div");
              buttonvek1minus1.id = "buttonvek1minus1";
              const textminus1 = document.createTextNode("x");
              buttonvek1minus1.appendChild(textminus1);
              buttonvek1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              vek2.appendChild(buttonvek1minus1);
            } else if ($("input[name='CFV[568205]']").parent().parent().css("display") != "flex") {
              vek3.innerText = " ";
              $("input[name='CFV[568205]']").parent().parent().css("display", "flex");
              let buttonvek1minus2 = document.createElement("div");
              buttonvek1minus2.id = "buttonvek1minus2";
              const textminus2 = document.createTextNode("x");
              buttonvek1minus2.appendChild(textminus2);
              buttonvek1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              vek3.appendChild(buttonvek1minus2);
            }
            $("#buttonvek1minus").click(function () {
              if ($("input[name='CFV[568201]']").css("display") == "inline-block") {
                $("input[name='CFV[568201]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonvek1minus1").click(function () {
              if ($("input[name='CFV[568203]']").css("display") == "inline-block") {
                $("input[name='CFV[568203]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonvek1minus2").click(function () {
              if ($("input[name='CFV[568205]']").css("display") == "inline-block") {
                $("input[name='CFV[568205]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568199]']").parent().parent().css("display", "none");
          $("input[name='CFV[568201]']").parent().parent().css("display", "none");
          $("input[name='CFV[568203]']").parent().parent().css("display", "none");
          $("input[name='CFV[568205]']").parent().parent().css("display", "none");
        }
        //ЕКТ
        if ($("input[name='CFV[383011][742329]']").prop("checked")) {
          $("input[name='CFV[568207]']").parent().parent().css("display", "flex");
          let buttonekt1 = document.createElement("div");
          buttonekt1.id = "buttonekt1";
          const textmp = document.createTextNode("+");
          buttonekt1.appendChild(textmp);
          buttonekt1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 102px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          ekt.appendChild(buttonekt1);
          $("#buttonekt1").click(function () {
            if ($("input[name='CFV[568209]']").parent().parent().css("display") != "flex") {
              ekt1.innerText = " ";
              $("input[name='CFV[568209]']").parent().parent().css("display", "flex");
              let buttonekt1minus = document.createElement("div");
              buttonekt1minus.id = "buttonekt1minus";
              const textminus = document.createTextNode("x");
              buttonekt1minus.appendChild(textminus);
              buttonekt1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ekt1.appendChild(buttonekt1minus);
            } else if ($("input[name='CFV[568211]']").parent().parent().css("display") != "flex") {
              ekt2.innerText = " ";
              $("input[name='CFV[568211]']").parent().parent().css("display", "flex");
              let buttonekt1minus1 = document.createElement("div");
              buttonekt1minus1.id = "buttonekt1minus1";
              const textminus1 = document.createTextNode("x");
              buttonekt1minus1.appendChild(textminus1);
              buttonekt1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ekt2.appendChild(buttonekt1minus1);
            } else if ($("input[name='CFV[568213]']").parent().parent().css("display") != "flex") {
              ekt3.innerText = " ";
              $("input[name='CFV[568213]']").parent().parent().css("display", "flex");
              let buttonekt1minus2 = document.createElement("div");
              buttonekt1minus2.id = "buttonekt1minus2";
              const textminus2 = document.createTextNode("x");
              buttonekt1minus2.appendChild(textminus2);
              buttonekt1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ekt3.appendChild(buttonekt1minus2);
            }
            $("#buttonekt1minus").click(function () {
              if ($("input[name='CFV[568209]']").css("display") == "inline-block") {
                $("input[name='CFV[568209]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonekt1minus1").click(function () {
              if ($("input[name='CFV[568211]']").css("display") == "inline-block") {
                $("input[name='CFV[568211]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonekt1minus2").click(function () {
              if ($("input[name='CFV[568213]']").css("display") == "inline-block") {
                $("input[name='CFV[568213]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568207]']").parent().parent().css("display", "none");
          $("input[name='CFV[568209]']").parent().parent().css("display", "none");
          $("input[name='CFV[568211]']").parent().parent().css("display", "none");
          $("input[name='CFV[568213]']").parent().parent().css("display", "none");
        }
        //СПК
        if ($("input[name='CFV[383011][742331]']").prop("checked")) {
          $("input[name='CFV[568215]']").parent().parent().css("display", "flex");
          let buttonspk1 = document.createElement("div");
          buttonspk1.id = "buttonspk1";
          const textmp = document.createTextNode("+");
          buttonspk1.appendChild(textmp);
          buttonspk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 101px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          spk.appendChild(buttonspk1);
          $("#buttonspk1").click(function () {
            if ($("input[name='CFV[568217]']").parent().parent().css("display") != "flex") {
              spk1.innerText = " ";
              $("input[name='CFV[568217]']").parent().parent().css("display", "flex");
              let buttonspk1minus = document.createElement("div");
              buttonspk1minus.id = "buttonspk1minus";
              const textminus = document.createTextNode("x");
              buttonspk1minus.appendChild(textminus);
              buttonspk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              spk1.appendChild(buttonspk1minus);
            } else if ($("input[name='CFV[568219]']").parent().parent().css("display") != "flex") {
              spk2.innerText = " ";
              $("input[name='CFV[568219]']").parent().parent().css("display", "flex");
              let buttonspk1minus1 = document.createElement("div");
              buttonspk1minus1.id = "buttonspk1minus1";
              const textminus1 = document.createTextNode("x");
              buttonspk1minus1.appendChild(textminus1);
              buttonspk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              spk2.appendChild(buttonspk1minus1);
            } else if ($("input[name='CFV[568221]']").parent().parent().css("display") != "flex") {
              spk3.innerText = " ";
              $("input[name='CFV[568221]']").parent().parent().css("display", "flex");
              let buttonspk1minus2 = document.createElement("div");
              buttonspk1minus2.id = "buttonspk1minus2";
              const textminus2 = document.createTextNode("x");
              buttonspk1minus2.appendChild(textminus2);
              buttonspk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              spk3.appendChild(buttonspk1minus2);
            }
            $("#buttonspk1minus").click(function () {
              if ($("input[name='CFV[568217]']").css("display") == "inline-block") {
                $("input[name='CFV[568217]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonspk1minus1").click(function () {
              if ($("input[name='CFV[568219]']").css("display") == "inline-block") {
                $("input[name='CFV[568219]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonspk1minus2").click(function () {
              if ($("input[name='CFV[568221]']").css("display") == "inline-block") {
                $("input[name='CFV[568221]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568215]']").parent().parent().css("display", "none");
          $("input[name='CFV[568217]']").parent().parent().css("display", "none");
          $("input[name='CFV[568219]']").parent().parent().css("display", "none");
          $("input[name='CFV[568221]']").parent().parent().css("display", "none");
        }
        //Профит
        if ($("input[name='CFV[383011][742333]']").prop("checked")) {
          $("input[name='CFV[568223]']").parent().parent().css("display", "flex");
          let buttonpt1 = document.createElement("div");
          buttonpt1.id = "buttonpt1";
          const textmp = document.createTextNode("+");
          buttonpt1.appendChild(textmp);
          buttonpt1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 82px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          pt.appendChild(buttonpt1);
          $("#buttonpt1").click(function () {
            if ($("input[name='CFV[568225]']").parent().parent().css("display") != "flex") {
              pt1.innerText = " ";
              $("input[name='CFV[568225]']").parent().parent().css("display", "flex");
              let buttonpt1minus = document.createElement("div");
              buttonpt1minus.id = "buttonpt1minus";
              const textminus = document.createTextNode("x");
              buttonpt1minus.appendChild(textminus);
              buttonpt1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              pt1.appendChild(buttonpt1minus);
            } else if ($("input[name='CFV[568227]']").parent().parent().css("display") != "flex") {
              pt2.innerText = " ";
              $("input[name='CFV[568227]']").parent().parent().css("display", "flex");
              let buttonpt1minus1 = document.createElement("div");
              buttonpt1minus1.id = "buttonpt1minus1";
              const textminus1 = document.createTextNode("x");
              buttonpt1minus1.appendChild(textminus1);
              buttonpt1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              pt2.appendChild(buttonpt1minus1);
            } else if ($("input[name='CFV[568229]']").parent().parent().css("display") != "flex") {
              pt3.innerText = " ";
              $("input[name='CFV[568229]']").parent().parent().css("display", "flex");
              let buttonpt1minus2 = document.createElement("div");
              buttonpt1minus2.id = "buttonpt1minus2";
              const textminus2 = document.createTextNode("x");
              buttonpt1minus2.appendChild(textminus2);
              buttonpt1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              pt3.appendChild(buttonpt1minus2);
            }
            $("#buttonpt1minus").click(function () {
              if ($("input[name='CFV[568225]']").css("display") == "inline-block") {
                $("input[name='CFV[568225]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonpt1minus1").click(function () {
              if ($("input[name='CFV[568227]']").css("display") == "inline-block") {
                $("input[name='CFV[568227]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonpt1minus2").click(function () {
              if ($("input[name='CFV[568229]']").css("display") == "inline-block") {
                $("input[name='CFV[568229]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568223]']").parent().parent().css("display", "none");
          $("input[name='CFV[568225]']").parent().parent().css("display", "none");
          $("input[name='CFV[568227]']").parent().parent().css("display", "none");
          $("input[name='CFV[568229]']").parent().parent().css("display", "none");
        }
        //Пластик и Крепеж
        if ($("input[name='CFV[383011][742335]']").prop("checked")) {
          $("input[name='CFV[568231]']").parent().parent().css("display", "flex");
          let buttonpk1 = document.createElement("div");
          buttonpk1.id = "buttonpk1";
          const textmp = document.createTextNode("+");
          buttonpk1.appendChild(textmp);
          buttonpk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 14px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          pk.appendChild(buttonpk1);
          $("#buttonpk1").click(function () {
            if ($("input[name='CFV[568233]']").parent().parent().css("display") != "flex") {
              pk1.innerText = " ";
              $("input[name='CFV[568233]']").parent().parent().css("display", "flex");
              let buttonpk1minus = document.createElement("div");
              buttonpk1minus.id = "buttonpk1minus";
              const textminus = document.createTextNode("x");
              buttonpk1minus.appendChild(textminus);
              buttonpk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              pk1.appendChild(buttonpk1minus);
            } else if ($("input[name='CFV[568235]']").parent().parent().css("display") != "flex") {
              pk2.innerText = " ";
              $("input[name='CFV[568235]']").parent().parent().css("display", "flex");
              let buttonpk1minus1 = document.createElement("div");
              buttonpk1minus1.id = "buttonpk1minus1";
              const textminus1 = document.createTextNode("x");
              buttonpk1minus1.appendChild(textminus1);
              buttonpk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              pk2.appendChild(buttonpk1minus1);
            } else if ($("input[name='CFV[568237]']").parent().parent().css("display") != "flex") {
              pk3.innerText = " ";
              $("input[name='CFV[568237]']").parent().parent().css("display", "flex");
              let buttonpk1minus2 = document.createElement("div");
              buttonpk1minus2.id = "buttonpk1minus2";
              const textminus2 = document.createTextNode("x");
              buttonpk1minus2.appendChild(textminus2);
              buttonpk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              pk3.appendChild(buttonpk1minus2);
            }
            $("#buttonpk1minus").click(function () {
              if ($("input[name='CFV[568233]']").css("display") == "inline-block") {
                $("input[name='CFV[568233]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonpk1minus1").click(function () {
              if ($("input[name='CFV[568235]']").css("display") == "inline-block") {
                $("input[name='CFV[568235]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonpk1minus2").click(function () {
              if ($("input[name='CFV[568237]']").css("display") == "inline-block") {
                $("input[name='CFV[568237]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568231]']").parent().parent().css("display", "none");
          $("input[name='CFV[568233]']").parent().parent().css("display", "none");
          $("input[name='CFV[568235]']").parent().parent().css("display", "none");
          $("input[name='CFV[568237]']").parent().parent().css("display", "none");
        }
        //Русклимат
        if ($("input[name='CFV[383011][742337]']").prop("checked")) {
          $("input[name='CFV[568239]']").parent().parent().css("display", "flex");
          let buttonrs1 = document.createElement("div");
          buttonrs1.id = "buttonrs1";
          const textmp = document.createTextNode("+");
          buttonrs1.appendChild(textmp);
          buttonrs1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 59px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          rs.appendChild(buttonrs1);
          $("#buttonrs1").click(function () {
            if ($("input[name='CFV[568241]']").parent().parent().css("display") != "flex") {
              rs1.innerText = " ";
              $("input[name='CFV[568241]']").parent().parent().css("display", "flex");
              let buttonrs1minus = document.createElement("div");
              buttonrs1minus.id = "buttonrs1minus";
              const textminus = document.createTextNode("x");
              buttonrs1minus.appendChild(textminus);
              buttonrs1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              rs1.appendChild(buttonrs1minus);
            } else if ($("input[name='CFV[568243]']").parent().parent().css("display") != "flex") {
              rs2.innerText = " ";
              $("input[name='CFV[568243]']").parent().parent().css("display", "flex");
              let buttonrs1minus1 = document.createElement("div");
              buttonrs1minus1.id = "buttonrs1minus1";
              const textminus1 = document.createTextNode("x");
              buttonrs1minus1.appendChild(textminus1);
              buttonrs1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              rs2.appendChild(buttonrs1minus1);
            } else if ($("input[name='CFV[568245]']").parent().parent().css("display") != "flex") {
              rs3.innerText = " ";
              $("input[name='CFV[568245]']").parent().parent().css("display", "flex");
              let buttonrs1minus2 = document.createElement("div");
              buttonrs1minus2.id = "buttonrs1minus2";
              const textminus2 = document.createTextNode("x");
              buttonrs1minus2.appendChild(textminus2);
              buttonrs1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              rs3.appendChild(buttonrs1minus2);
            }
            $("#buttonrs1minus").click(function () {
              if ($("input[name='CFV[568241]']").css("display") == "inline-block") {
                $("input[name='CFV[568241]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonrs1minus1").click(function () {
              if ($("input[name='CFV[568243]']").css("display") == "inline-block") {
                $("input[name='CFV[568243]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonrs1minus2").click(function () {
              if ($("input[name='CFV[568245]']").css("display") == "inline-block") {
                $("input[name='CFV[568245]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568239]']").parent().parent().css("display", "none");
          $("input[name='CFV[568241]']").parent().parent().css("display", "none");
          $("input[name='CFV[568243]']").parent().parent().css("display", "none");
          $("input[name='CFV[568245]']").parent().parent().css("display", "none");
        }
        //Юпласт
        if ($("input[name='CFV[383011][742339]']").prop("checked")) {
          $("input[name='CFV[568247]']").parent().parent().css("display", "flex");
          let buttonyu1 = document.createElement("div");
          buttonyu1.id = "buttonyu1";
          const textmp = document.createTextNode("+");
          buttonyu1.appendChild(textmp);
          buttonyu1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 78px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          yu.appendChild(buttonyu1);
          $("#buttonyu1").click(function () {
            if ($("input[name='CFV[568249]']").parent().parent().css("display") != "flex") {
              yu1.innerText = " ";
              $("input[name='CFV[568249]']").parent().parent().css("display", "flex");
              let buttonyu1minus = document.createElement("div");
              buttonyu1minus.id = "buttonyu1minus";
              const textminus = document.createTextNode("x");
              buttonyu1minus.appendChild(textminus);
              buttonyu1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              yu1.appendChild(buttonyu1minus);
            } else if ($("input[name='CFV[568251]']").parent().parent().css("display") != "flex") {
              yu2.innerText = " ";
              $("input[name='CFV[568251]']").parent().parent().css("display", "flex");
              let buttonyu1minus1 = document.createElement("div");
              buttonyu1minus1.id = "buttonyu1minus1";
              const textminus1 = document.createTextNode("x");
              buttonyu1minus1.appendChild(textminus1);
              buttonyu1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              yu2.appendChild(buttonyu1minus1);
            } else if ($("input[name='CFV[568253]']").parent().parent().css("display") != "flex") {
              yu3.innerText = " ";
              $("input[name='CFV[568253]']").parent().parent().css("display", "flex");
              let buttonyu1minus2 = document.createElement("div");
              buttonyu1minus2.id = "buttonyu1minus2";
              const textminus2 = document.createTextNode("x");
              buttonyu1minus2.appendChild(textminus2);
              buttonyu1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              yu3.appendChild(buttonyu1minus2);
            }
            $("#buttonyu1minus").click(function () {
              if ($("input[name='CFV[568249]']").css("display") == "inline-block") {
                $("input[name='CFV[568249]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonyu1minus1").click(function () {
              if ($("input[name='CFV[568251]']").css("display") == "inline-block") {
                $("input[name='CFV[568251]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonyu1minus2").click(function () {
              if ($("input[name='CFV[568253]']").css("display") == "inline-block") {
                $("input[name='CFV[568253]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568247]']").parent().parent().css("display", "none");
          $("input[name='CFV[568249]']").parent().parent().css("display", "none");
          $("input[name='CFV[568251]']").parent().parent().css("display", "none");
          $("input[name='CFV[568253]']").parent().parent().css("display", "none");
        }
        //Гекса
        if ($("input[name='CFV[383011][742341]']").prop("checked")) {
          $("input[name='CFV[568255]']").parent().parent().css("display", "flex");
          let buttongk1 = document.createElement("div");
          buttongk1.id = "buttongk1";
          const textmp = document.createTextNode("+");
          buttongk1.appendChild(textmp);
          buttongk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 89px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          gk.appendChild(buttongk1);
          $("#buttongk1").click(function () {
            if ($("input[name='CFV[568257]']").parent().parent().css("display") != "flex") {
              gk1.innerText = " ";
              $("input[name='CFV[568257]']").parent().parent().css("display", "flex");
              let buttongk1minus = document.createElement("div");
              buttongk1minus.id = "buttongk1minus";
              const textminus = document.createTextNode("x");
              buttongk1minus.appendChild(textminus);
              buttongk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              gk1.appendChild(buttongk1minus);
            } else if ($("input[name='CFV[568259]']").parent().parent().css("display") != "flex") {
              gk2.innerText = " ";
              $("input[name='CFV[568259]']").parent().parent().css("display", "flex");
              let buttongk1minus1 = document.createElement("div");
              buttongk1minus1.id = "buttongk1minus1";
              const textminus1 = document.createTextNode("x");
              buttongk1minus1.appendChild(textminus1);
              buttongk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              gk2.appendChild(buttongk1minus1);
            } else if ($("input[name='CFV[568261]']").parent().parent().css("display") != "flex") {
              gk3.innerText = " ";
              $("input[name='CFV[568261]']").parent().parent().css("display", "flex");
              let buttongk1minus2 = document.createElement("div");
              buttongk1minus2.id = "buttongk1minus2";
              const textminus2 = document.createTextNode("x");
              buttongk1minus2.appendChild(textminus2);
              buttongk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              gk3.appendChild(buttongk1minus2);
            }
            $("#buttongk1minus").click(function () {
              if ($("input[name='CFV[568257]']").css("display") == "inline-block") {
                $("input[name='CFV[568257]']").parent().parent().css("display", "none");
              }
            });
            $("#buttongk1minus1").click(function () {
              if ($("input[name='CFV[568259]']").css("display") == "inline-block") {
                $("input[name='CFV[568259]']").parent().parent().css("display", "none");
              }
            });
            $("#buttongk1minus2").click(function () {
              if ($("input[name='CFV[568261]']").css("display") == "inline-block") {
                $("input[name='CFV[568261]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568255]']").parent().parent().css("display", "none");
          $("input[name='CFV[568257]']").parent().parent().css("display", "none");
          $("input[name='CFV[568259]']").parent().parent().css("display", "none");
          $("input[name='CFV[568261]']").parent().parent().css("display", "none");
        }
        //Фитинг 24
        if ($("input[name='CFV[383011][742343]']").prop("checked")) {
          $("input[name='CFV[568263]']").parent().parent().css("display", "flex");
          let buttonft1 = document.createElement("div");
          buttonft1.id = "buttonft1";
          const textmp = document.createTextNode("+");
          buttonft1.appendChild(textmp);
          buttonft1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 63px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          ft.appendChild(buttonft1);
          $("#buttonft1").click(function () {
            if ($("input[name='CFV[568265]']").parent().parent().css("display") != "flex") {
              ft1.innerText = " ";
              $("input[name='CFV[568265]']").parent().parent().css("display", "flex");
              let buttonft1minus = document.createElement("div");
              buttonft1minus.id = "buttonft1minus";
              const textminus = document.createTextNode("x");
              buttonft1minus.appendChild(textminus);
              buttonft1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ft1.appendChild(buttonft1minus);
            } else if ($("input[name='CFV[568267]']").parent().parent().css("display") != "flex") {
              ft2.innerText = " ";
              $("input[name='CFV[568267]']").parent().parent().css("display", "flex");
              let buttonft1minus1 = document.createElement("div");
              buttonft1minus1.id = "buttonft1minus1";
              const textminus1 = document.createTextNode("x");
              buttonft1minus1.appendChild(textminus1);
              buttonft1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ft2.appendChild(buttonft1minus1);
            } else if ($("input[name='CFV[568269]']").parent().parent().css("display") != "flex") {
              ft3.innerText = " ";
              $("input[name='CFV[568269]']").parent().parent().css("display", "flex");
              let buttonft1minus2 = document.createElement("div");
              buttonft1minus2.id = "buttonft1minus2";
              const textminus2 = document.createTextNode("x");
              buttonft1minus2.appendChild(textminus2);
              buttonft1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ft3.appendChild(buttonft1minus2);
            }
            $("#buttonft1minus").click(function () {
              if ($("input[name='CFV[568265]']").css("display") == "inline-block") {
                $("input[name='CFV[568265]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonft1minus1").click(function () {
              if ($("input[name='CFV[568267]']").css("display") == "inline-block") {
                $("input[name='CFV[568267]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonft1minus2").click(function () {
              if ($("input[name='CFV[568269]']").css("display") == "inline-block") {
                $("input[name='CFV[568269]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568263]']").parent().parent().css("display", "none");
          $("input[name='CFV[568265]']").parent().parent().css("display", "none");
          $("input[name='CFV[568267]']").parent().parent().css("display", "none");
          $("input[name='CFV[568269]']").parent().parent().css("display", "none");
        }
        //ГенПоставка
        if ($("input[name='CFV[383011][742345]']").prop("checked")) {
          $("input[name='CFV[568271]']").parent().parent().css("display", "flex");
          let buttongp1 = document.createElement("div");
          buttongp1.id = "buttongp1";
          const textmp = document.createTextNode("+");
          buttongp1.appendChild(textmp);
          buttongp1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 42px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          gp.appendChild(buttongp1);
          $("#buttongp1").click(function () {
            if ($("input[name='CFV[568273]']").parent().parent().css("display") != "flex") {
              gp1.innerText = " ";
              $("input[name='CFV[568273]']").parent().parent().css("display", "flex");
              let buttongp1minus = document.createElement("div");
              buttongp1minus.id = "buttongp1minus";
              const textminus = document.createTextNode("x");
              buttongp1minus.appendChild(textminus);
              buttongp1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              gp1.appendChild(buttongp1minus);
            } else if ($("input[name='CFV[568275]']").parent().parent().css("display") != "flex") {
              gp2.innerText = " ";
              $("input[name='CFV[568275]']").parent().parent().css("display", "flex");
              let buttongp1minus1 = document.createElement("div");
              buttongp1minus1.id = "buttongp1minus1";
              const textminus1 = document.createTextNode("x");
              buttongp1minus1.appendChild(textminus1);
              buttongp1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              gp2.appendChild(buttongp1minus1);
            } else if ($("input[name='CFV[568277]']").parent().parent().css("display") != "flex") {
              gp3.innerText = " ";
              $("input[name='CFV[568277]']").parent().parent().css("display", "flex");
              let buttongp1minus2 = document.createElement("div");
              buttongp1minus2.id = "buttongp1minus2";
              const textminus2 = document.createTextNode("x");
              buttongp1minus2.appendChild(textminus2);
              buttongp1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              gp3.appendChild(buttongp1minus2);
            }
            $("#buttongp1minus").click(function () {
              if ($("input[name='CFV[568273]']").css("display") == "inline-block") {
                $("input[name='CFV[568273]']").parent().parent().css("display", "none");
              }
            });
            $("#buttongp1minus1").click(function () {
              if ($("input[name='CFV[568275]']").css("display") == "inline-block") {
                $("input[name='CFV[568275]']").parent().parent().css("display", "none");
              }
            });
            $("#buttongp1minus2").click(function () {
              if ($("input[name='CFV[568277]']").css("display") == "inline-block") {
                $("input[name='CFV[568277]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568271]']").parent().parent().css("display", "none");
          $("input[name='CFV[568273]']").parent().parent().css("display", "none");
          $("input[name='CFV[568275]']").parent().parent().css("display", "none");
          $("input[name='CFV[568277]']").parent().parent().css("display", "none");
        }
        //Маяк
        if ($("input[name='CFV[383011][742347]']").prop("checked")) {
          $("input[name='CFV[568279]']").parent().parent().css("display", "flex");
          let buttonma1 = document.createElement("div");
          buttonma1.id = "buttonma1";
          const textmp = document.createTextNode("+");
          buttonma1.appendChild(textmp);
          buttonma1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 86px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          ma.appendChild(buttonma1);
          $("#buttonma1").click(function () {
            if ($("input[name='CFV[568281]']").parent().parent().css("display") != "flex") {
              ma1.innerText = " ";
              $("input[name='CFV[568281]']").parent().parent().css("display", "flex");
              let buttonma1minus = document.createElement("div");
              buttonma1minus.id = "buttonma1minus";
              const textminus = document.createTextNode("x");
              buttonma1minus.appendChild(textminus);
              buttonma1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ma1.appendChild(buttonma1minus);
            } else if ($("input[name='CFV[568283]']").parent().parent().css("display") != "flex") {
              ma2.innerText = " ";
              $("input[name='CFV[568283]']").parent().parent().css("display", "flex");
              let buttonma1minus1 = document.createElement("div");
              buttonma1minus1.id = "buttonma1minus1";
              const textminus1 = document.createTextNode("x");
              buttonma1minus1.appendChild(textminus1);
              buttonma1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ma2.appendChild(buttonma1minus1);
            } else if ($("input[name='CFV[568285]']").parent().parent().css("display") != "flex") {
              ma3.innerText = " ";
              $("input[name='CFV[568285]']").parent().parent().css("display", "flex");
              let buttonma1minus2 = document.createElement("div");
              buttonma1minus2.id = "buttonma1minus2";
              const textminus2 = document.createTextNode("x");
              buttonma1minus2.appendChild(textminus2);
              buttonma1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              ma3.appendChild(buttonma1minus2);
            }
            $("#buttonma1minus").click(function () {
              if ($("input[name='CFV[568281]']").css("display") == "inline-block") {
                $("input[name='CFV[568281]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonma1minus1").click(function () {
              if ($("input[name='CFV[568283]']").css("display") == "inline-block") {
                $("input[name='CFV[568283]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonma1minus2").click(function () {
              if ($("input[name='CFV[568285]']").css("display") == "inline-block") {
                $("input[name='CFV[568285]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568279]']").parent().parent().css("display", "none");
          $("input[name='CFV[568281]']").parent().parent().css("display", "none");
          $("input[name='CFV[568283]']").parent().parent().css("display", "none");
          $("input[name='CFV[568285]']").parent().parent().css("display", "none");
        }
        //Феррум
        if ($("input[name='CFV[383011][742349]']").prop("checked")) {
          $("input[name='CFV[568287]']").parent().parent().css("display", "flex");
          let buttonfe1 = document.createElement("div");
          buttonfe1.id = "buttonfe1";
          const textmp = document.createTextNode("+");
          buttonfe1.appendChild(textmp);
          buttonfe1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 63px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          fe.appendChild(buttonfe1);
          $("#buttonfe1").click(function () {
            if ($("input[name='CFV[568289]']").parent().parent().css("display") != "flex") {
              fe1.innerText = " ";
              $("input[name='CFV[568289]']").parent().parent().css("display", "flex");
              let buttonfe1minus = document.createElement("div");
              buttonfe1minus.id = "buttonfe1minus";
              const textminus = document.createTextNode("x");
              buttonfe1minus.appendChild(textminus);
              buttonfe1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              fe1.appendChild(buttonfe1minus);
            } else if ($("input[name='CFV[568291]']").parent().parent().css("display") != "flex") {
              fe2.innerText = " ";
              $("input[name='CFV[568291]']").parent().parent().css("display", "flex");
              let buttonfe1minus1 = document.createElement("div");
              buttonfe1minus1.id = "buttonfe1minus1";
              const textminus1 = document.createTextNode("x");
              buttonfe1minus1.appendChild(textminus1);
              buttonfe1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              fe2.appendChild(buttonfe1minus1);
            } else if ($("input[name='CFV[568293]']").parent().parent().css("display") != "flex") {
              fe3.innerText = " ";
              $("input[name='CFV[568293]']").parent().parent().css("display", "flex");
              let buttonfe1minus2 = document.createElement("div");
              buttonfe1minus2.id = "buttonfe1minus2";
              const textminus2 = document.createTextNode("x");
              buttonfe1minus2.appendChild(textminus2);
              buttonfe1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              fe3.appendChild(buttonfe1minus2);
            }
            $("#buttonfe1minus").click(function () {
              if ($("input[name='CFV[568289]']").css("display") == "inline-block") {
                $("input[name='CFV[568289]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonfe1minus1").click(function () {
              if ($("input[name='CFV[568291]']").css("display") == "inline-block") {
                $("input[name='CFV[568291]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonfe1minus2").click(function () {
              if ($("input[name='CFV[568293]']").css("display") == "inline-block") {
                $("input[name='CFV[568293]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568287]']").parent().parent().css("display", "none");
          $("input[name='CFV[568289]']").parent().parent().css("display", "none");
          $("input[name='CFV[568291]']").parent().parent().css("display", "none");
          $("input[name='CFV[568293]']").parent().parent().css("display", "none");
        }
        //ТеплоКом
        if ($("input[name='CFV[383011][742351]']").prop("checked")) {
          $("input[name='CFV[568295]']").parent().parent().css("display", "flex");
          let buttontk1 = document.createElement("div");
          buttontk1.id = "buttontk1";
          const textmp = document.createTextNode("+");
          buttontk1.appendChild(textmp);
          buttontk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 61px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          tk.appendChild(buttontk1);
          $("#buttontk1").click(function () {
            if ($("input[name='CFV[568297]']").parent().parent().css("display") != "flex") {
              tk1.innerText = " ";
              $("input[name='CFV[568297]']").parent().parent().css("display", "flex");
              let buttontk1minus = document.createElement("div");
              buttontk1minus.id = "buttontk1minus";
              const textminus = document.createTextNode("x");
              buttontk1minus.appendChild(textminus);
              buttontk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              tk1.appendChild(buttontk1minus);
            } else if ($("input[name='CFV[568303]']").parent().parent().css("display") != "flex") {
              tk2.innerText = " ";
              $("input[name='CFV[568303]']").parent().parent().css("display", "flex");
              let buttontk1minus1 = document.createElement("div");
              buttontk1minus1.id = "buttontk1minus1";
              const textminus1 = document.createTextNode("x");
              buttontk1minus1.appendChild(textminus1);
              buttontk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              tk2.appendChild(buttontk1minus1);
            } else if ($("input[name='CFV[568301]']").parent().parent().css("display") != "flex") {
              tk3.innerText = " ";
              $("input[name='CFV[568301]']").parent().parent().css("display", "flex");
              let buttontk1minus2 = document.createElement("div");
              buttontk1minus2.id = "buttontk1minus2";
              const textminus2 = document.createTextNode("x");
              buttontk1minus2.appendChild(textminus2);
              buttontk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              tk3.appendChild(buttontk1minus2);
            }
            $("#buttontk1minus").click(function () {
              if ($("input[name='CFV[568297]']").css("display") == "inline-block") {
                $("input[name='CFV[568297]']").parent().parent().css("display", "none");
              }
            });
            $("#buttontk1minus1").click(function () {
              if ($("input[name='CFV[568303]']").css("display") == "inline-block") {
                $("input[name='CFV[568303]']").parent().parent().css("display", "none");
              }
            });
            $("#buttontk1minus2").click(function () {
              if ($("input[name='CFV[568301]']").css("display") == "inline-block") {
                $("input[name='CFV[568301]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568295]']").parent().parent().css("display", "none");
          $("input[name='CFV[568297]']").parent().parent().css("display", "none");
          $("input[name='CFV[568303]']").parent().parent().css("display", "none");
          $("input[name='CFV[568301]']").parent().parent().css("display", "none");
        }
        //Современныеокна
        if ($("input[name='CFV[383011][742353]']").prop("checked")) {
          $("input[name='CFV[568305]']").parent().parent().css("display", "flex");
          let buttonso1 = document.createElement("div");
          buttonso1.id = "buttonso1";
          const textmp = document.createTextNode("+");
          buttonso1.appendChild(textmp);
          buttonso1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 6px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          so.appendChild(buttonso1);
          $("#buttonso1").click(function () {
            if ($("input[name='CFV[568307]']").parent().parent().css("display") != "flex") {
              so1.innerText = " ";
              $("input[name='CFV[568307]']").parent().parent().css("display", "flex");
              let buttonso1minus = document.createElement("div");
              buttonso1minus.id = "buttonso1minus";
              const textminus = document.createTextNode("x");
              buttonso1minus.appendChild(textminus);
              buttonso1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              so1.appendChild(buttonso1minus);
            } else if ($("input[name='CFV[568309]']").parent().parent().css("display") != "flex") {
              so2.innerText = " ";
              $("input[name='CFV[568309]']").parent().parent().css("display", "flex");
              let buttonso1minus1 = document.createElement("div");
              buttonso1minus1.id = "buttonso1minus1";
              const textminus1 = document.createTextNode("x");
              buttonso1minus1.appendChild(textminus1);
              buttonso1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              so2.appendChild(buttonso1minus1);
            } else if ($("input[name='CFV[568311]']").parent().parent().css("display") != "flex") {
              so3.innerText = " ";
              $("input[name='CFV[568311]']").parent().parent().css("display", "flex");
              let buttonso1minus2 = document.createElement("div");
              buttonso1minus2.id = "buttonso1minus2";
              const textminus2 = document.createTextNode("x");
              buttonso1minus2.appendChild(textminus2);
              buttonso1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              so3.appendChild(buttonso1minus2);
            }
            $("#buttonso1minus").click(function () {
              if ($("input[name='CFV[568307]']").css("display") == "inline-block") {
                $("input[name='CFV[568307]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonso1minus1").click(function () {
              if ($("input[name='CFV[568309]']").css("display") == "inline-block") {
                $("input[name='CFV[568309]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonso1minus2").click(function () {
              if ($("input[name='CFV[568311]']").css("display") == "inline-block") {
                $("input[name='CFV[568311]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568305]']").parent().parent().css("display", "none");
          $("input[name='CFV[568307]']").parent().parent().css("display", "none");
          $("input[name='CFV[568309]']").parent().parent().css("display", "none");
          $("input[name='CFV[568311]']").parent().parent().css("display", "none");
        }
        //Полимет
        if ($("input[name='CFV[383011][742355]']").prop("checked")) {
          $("input[name='CFV[568313]']").parent().parent().css("display", "flex");
          let buttonpo1 = document.createElement("div");
          buttonpo1.id = "buttonpo1";
          const textmp = document.createTextNode("+");
          buttonpo1.appendChild(textmp);
          buttonpo1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 78px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          po.appendChild(buttonpo1);
          $("#buttonpo1").click(function () {
            if ($("input[name='CFV[568315]']").parent().parent().css("display") != "flex") {
              po1.innerText = " ";
              $("input[name='CFV[568315]']").parent().parent().css("display", "flex");
              let buttonpo1minus = document.createElement("div");
              buttonpo1minus.id = "buttonpo1minus";
              const textminus = document.createTextNode("x");
              buttonpo1minus.appendChild(textminus);
              buttonpo1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              po1.appendChild(buttonpo1minus);
            } else if ($("input[name='CFV[568317]']").parent().parent().css("display") != "flex") {
              po2.innerText = " ";
              $("input[name='CFV[568317]']").parent().parent().css("display", "flex");
              let buttonpo1minus1 = document.createElement("div");
              buttonpo1minus1.id = "buttonpo1minus1";
              const textminus1 = document.createTextNode("x");
              buttonpo1minus1.appendChild(textminus1);
              buttonpo1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              po2.appendChild(buttonpo1minus1);
            } else if ($("input[name='CFV[568319]']").parent().parent().css("display") != "flex") {
              po3.innerText = " ";
              $("input[name='CFV[568319]']").parent().parent().css("display", "flex");
              let buttonpo1minus2 = document.createElement("div");
              buttonpo1minus2.id = "buttonpo1minus2";
              const textminus2 = document.createTextNode("x");
              buttonpo1minus2.appendChild(textminus2);
              buttonpo1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              po3.appendChild(buttonpo1minus2);
            }
            $("#buttonpo1minus").click(function () {
              if ($("input[name='CFV[568315]']").css("display") == "inline-block") {
                $("input[name='CFV[568315]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonpo1minus1").click(function () {
              if ($("input[name='CFV[568317]']").css("display") == "inline-block") {
                $("input[name='CFV[568317]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonpo1minus2").click(function () {
              if ($("input[name='CFV[568319]']").css("display") == "inline-block") {
                $("input[name='CFV[568319]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568313]']").parent().parent().css("display", "none");
          $("input[name='CFV[568315]']").parent().parent().css("display", "none");
          $("input[name='CFV[568317]']").parent().parent().css("display", "none");
          $("input[name='CFV[568319]']").parent().parent().css("display", "none");
        }
        //Финестра
        if ($("input[name='CFV[383011][742357]']").prop("checked")) {
          $("input[name='CFV[568321]']").parent().parent().css("display", "flex");
          let buttonfi1 = document.createElement("div");
          buttonfi1.id = "buttonfi1";
          const textmp = document.createTextNode("+");
          buttonfi1.appendChild(textmp);
          buttonfi1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 75px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          fi.appendChild(buttonfi1);
          $("#buttonfi1").click(function () {
            if ($("input[name='CFV[568323]']").parent().parent().css("display") != "flex") {
              fi1.innerText = " ";
              $("input[name='CFV[568323]']").parent().parent().css("display", "flex");
              let buttonfi1minus = document.createElement("div");
              buttonfi1minus.id = "buttonfi1minus";
              const textminus = document.createTextNode("x");
              buttonfi1minus.appendChild(textminus);
              buttonfi1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              fi1.appendChild(buttonfi1minus);
            } else if ($("input[name='CFV[568325]']").parent().parent().css("display") != "flex") {
              fi2.innerText = " ";
              $("input[name='CFV[568325]']").parent().parent().css("display", "flex");
              let buttonfi1minus1 = document.createElement("div");
              buttonfi1minus1.id = "buttonfi1minus1";
              const textminus1 = document.createTextNode("x");
              buttonfi1minus1.appendChild(textminus1);
              buttonfi1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              fi2.appendChild(buttonfi1minus1);
            } else if ($("input[name='CFV[568327]']").parent().parent().css("display") != "flex") {
              fi3.innerText = " ";
              $("input[name='CFV[568327]']").parent().parent().css("display", "flex");
              let buttonfi1minus2 = document.createElement("div");
              buttonfi1minus2.id = "buttonfi1minus2";
              const textminus2 = document.createTextNode("x");
              buttonfi1minus2.appendChild(textminus2);
              buttonfi1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              fi3.appendChild(buttonfi1minus2);
            }
            $("#buttonfi1minus").click(function () {
              if ($("input[name='CFV[568323]']").css("display") == "inline-block") {
                $("input[name='CFV[568323]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonfi1minus1").click(function () {
              if ($("input[name='CFV[568325]']").css("display") == "inline-block") {
                $("input[name='CFV[568325]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonfi1minus2").click(function () {
              if ($("input[name='CFV[568327]']").css("display") == "inline-block") {
                $("input[name='CFV[568327]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568321]']").parent().parent().css("display", "none");
          $("input[name='CFV[568323]']").parent().parent().css("display", "none");
          $("input[name='CFV[568325]']").parent().parent().css("display", "none");
          $("input[name='CFV[568327]']").parent().parent().css("display", "none");
        }
        //ТехноНиколь
        if ($("input[name='CFV[383011][742359]']").prop("checked")) {
          $("input[name='CFV[568329]']").parent().parent().css("display", "flex");
          let buttontn1 = document.createElement("div");
          buttontn1.id = "buttontn1";
          const textmp = document.createTextNode("+");
          buttontn1.appendChild(textmp);
          buttontn1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 42px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          tn.appendChild(buttontn1);
          $("#buttontn1").click(function () {
            if ($("input[name='CFV[568331]']").parent().parent().css("display") != "flex") {
              tn1.innerText = " ";
              $("input[name='CFV[568331]']").parent().parent().css("display", "flex");
              let buttontn1minus = document.createElement("div");
              buttontn1minus.id = "buttontn1minus";
              const textminus = document.createTextNode("x");
              buttontn1minus.appendChild(textminus);
              buttontn1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              tn1.appendChild(buttontn1minus);
            } else if ($("input[name='CFV[568333]']").parent().parent().css("display") != "flex") {
              tn2.innerText = " ";
              $("input[name='CFV[568333]']").parent().parent().css("display", "flex");
              let buttontn1minus1 = document.createElement("div");
              buttontn1minus1.id = "buttontn1minus1";
              const textminus1 = document.createTextNode("x");
              buttontn1minus1.appendChild(textminus1);
              buttontn1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              tn2.appendChild(buttontn1minus1);
            } else if ($("input[name='CFV[568335]']").parent().parent().css("display") != "flex") {
              tn3.innerText = " ";
              $("input[name='CFV[568335]']").parent().parent().css("display", "flex");
              let buttontn1minus2 = document.createElement("div");
              buttontn1minus2.id = "buttontn1minus2";
              const textminus2 = document.createTextNode("x");
              buttontn1minus2.appendChild(textminus2);
              buttontn1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              tn3.appendChild(buttontn1minus2);
            }
            $("#buttontn1minus").click(function () {
              if ($("input[name='CFV[568331]']").css("display") == "inline-block") {
                $("input[name='CFV[568331]']").parent().parent().css("display", "none");
              }
            });
            $("#buttontn1minus1").click(function () {
              if ($("input[name='CFV[568333]']").css("display") == "inline-block") {
                $("input[name='CFV[568333]']").parent().parent().css("display", "none");
              }
            });
            $("#buttontn1minus2").click(function () {
              if ($("input[name='CFV[568335]']").css("display") == "inline-block") {
                $("input[name='CFV[568335]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568329]']").parent().parent().css("display", "none");
          $("input[name='CFV[568331]']").parent().parent().css("display", "none");
          $("input[name='CFV[568333]']").parent().parent().css("display", "none");
          $("input[name='CFV[568335]']").parent().parent().css("display", "none");
        }
        //Водолей
        if ($("input[name='CFV[383011][742361]']").prop("checked")) {
          $("input[name='CFV[568337]']").parent().parent().css("display", "flex");
          let buttonvo1 = document.createElement("div");
          buttonvo1.id = "buttonvo1";
          const textmp = document.createTextNode("+");
          buttonvo1.appendChild(textmp);
          buttonvo1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 79px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          vo.appendChild(buttonvo1);
          $("#buttonvo1").click(function () {
            if ($("input[name='CFV[568339]']").parent().parent().css("display") != "flex") {
              vo1.innerText = " ";
              $("input[name='CFV[568339]']").parent().parent().css("display", "flex");
              let buttonvo1minus = document.createElement("div");
              buttonvo1minus.id = "buttonvo1minus";
              const textminus = document.createTextNode("x");
              buttonvo1minus.appendChild(textminus);
              buttonvo1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              vo1.appendChild(buttonvo1minus);
            } else if ($("input[name='CFV[568341]']").parent().parent().css("display") != "flex") {
              vo2.innerText = " ";
              $("input[name='CFV[568341]']").parent().parent().css("display", "flex");
              let buttonvo1minus1 = document.createElement("div");
              buttonvo1minus1.id = "buttonvo1minus1";
              const textminus1 = document.createTextNode("x");
              buttonvo1minus1.appendChild(textminus1);
              buttonvo1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              vo2.appendChild(buttonvo1minus1);
            } else if ($("input[name='CFV[568343]']").parent().parent().css("display") != "flex") {
              vo3.innerText = " ";
              $("input[name='CFV[568343]']").parent().parent().css("display", "flex");
              let buttonvo1minus2 = document.createElement("div");
              buttonvo1minus2.id = "buttonvo1minus2";
              const textminus2 = document.createTextNode("x");
              buttonvo1minus2.appendChild(textminus2);
              buttonvo1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              vo3.appendChild(buttonvo1minus2);
            }
            $("#buttonvo1minus").click(function () {
              if ($("input[name='CFV[568339]']").css("display") == "inline-block") {
                $("input[name='CFV[568339]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonvo1minus1").click(function () {
              if ($("input[name='CFV[568341]']").css("display") == "inline-block") {
                $("input[name='CFV[568341]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonvo1minus2").click(function () {
              if ($("input[name='CFV[568343]']").css("display") == "inline-block") {
                $("input[name='CFV[568343]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568337]']").parent().parent().css("display", "none");
          $("input[name='CFV[568339]']").parent().parent().css("display", "none");
          $("input[name='CFV[568341]']").parent().parent().css("display", "none");
          $("input[name='CFV[568343]']").parent().parent().css("display", "none");
        }
        //Амбар
        if ($("input[name='CFV[383011][742363]']").prop("checked")) {
          $("input[name='CFV[568345]']").parent().parent().css("display", "flex");
          let buttonam1 = document.createElement("div");
          buttonam1.id = "buttonam1";
          const textmp = document.createTextNode("+");
          buttonam1.appendChild(textmp);
          buttonam1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 85px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          am.appendChild(buttonam1);
          $("#buttonam1").click(function () {
            if ($("input[name='CFV[568347]']").parent().parent().css("display") != "flex") {
              am1.innerText = " ";
              $("input[name='CFV[568347]']").parent().parent().css("display", "flex");
              let buttonam1minus = document.createElement("div");
              buttonam1minus.id = "buttonam1minus";
              const textminus = document.createTextNode("x");
              buttonam1minus.appendChild(textminus);
              buttonam1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              am1.appendChild(buttonam1minus);
            } else if ($("input[name='CFV[568349]']").parent().parent().css("display") != "flex") {
              am2.innerText = " ";
              $("input[name='CFV[568349]']").parent().parent().css("display", "flex");
              let buttonam1minus1 = document.createElement("div");
              buttonam1minus1.id = "buttonam1minus1";
              const textminus1 = document.createTextNode("x");
              buttonam1minus1.appendChild(textminus1);
              buttonam1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              am2.appendChild(buttonam1minus1);
            } else if ($("input[name='CFV[568351]']").parent().parent().css("display") != "flex") {
              am3.innerText = " ";
              $("input[name='CFV[568351]']").parent().parent().css("display", "flex");
              let buttonam1minus2 = document.createElement("div");
              buttonam1minus2.id = "buttonam1minus2";
              const textminus2 = document.createTextNode("x");
              buttonam1minus2.appendChild(textminus2);
              buttonam1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              am3.appendChild(buttonam1minus2);
            }
            $("#buttonam1minus").click(function () {
              if ($("input[name='CFV[568347]']").css("display") == "inline-block") {
                $("input[name='CFV[568347]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonam1minus1").click(function () {
              if ($("input[name='CFV[568349]']").css("display") == "inline-block") {
                $("input[name='CFV[568349]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonam1minus2").click(function () {
              if ($("input[name='CFV[568351]']").css("display") == "inline-block") {
                $("input[name='CFV[568351]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568345]']").parent().parent().css("display", "none");
          $("input[name='CFV[568347]']").parent().parent().css("display", "none");
          $("input[name='CFV[568349]']").parent().parent().css("display", "none");
          $("input[name='CFV[568351]']").parent().parent().css("display", "none");
        }
        //Сатурн
        if ($("input[name='CFV[383011][742365]']").prop("checked")) {
          $("input[name='CFV[568353]']").parent().parent().css("display", "flex");
          let buttonsa1 = document.createElement("div");
          buttonsa1.id = "buttonsa1";
          const textmp = document.createTextNode("+");
          buttonsa1.appendChild(textmp);
          buttonsa1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 85px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          sa.appendChild(buttonsa1);
          $("#buttonsa1").click(function () {
            if ($("input[name='CFV[568355]']").parent().parent().css("display") != "flex") {
              sa1.innerText = " ";
              $("input[name='CFV[568355]']").parent().parent().css("display", "flex");
              let buttonsa1minus = document.createElement("div");
              buttonsa1minus.id = "buttonsa1minus";
              const textminus = document.createTextNode("x");
              buttonsa1minus.appendChild(textminus);
              buttonsa1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sa1.appendChild(buttonsa1minus);
            } else if ($("input[name='CFV[568357]']").parent().parent().css("display") != "flex") {
              sa2.innerText = " ";
              $("input[name='CFV[568357]']").parent().parent().css("display", "flex");
              let buttonsa1minus1 = document.createElement("div");
              buttonsa1minus1.id = "buttonsa1minus1";
              const textminus1 = document.createTextNode("x");
              buttonsa1minus1.appendChild(textminus1);
              buttonsa1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sa2.appendChild(buttonsa1minus1);
            } else if ($("input[name='CFV[568359]']").parent().parent().css("display") != "flex") {
              sa3.innerText = " ";
              $("input[name='CFV[568359]']").parent().parent().css("display", "flex");
              let buttonsa1minus2 = document.createElement("div");
              buttonsa1minus2.id = "buttonsa1minus2";
              const textminus2 = document.createTextNode("x");
              buttonsa1minus2.appendChild(textminus2);
              buttonsa1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sa3.appendChild(buttonsa1minus2);
            }
            $("#buttonsa1minus").click(function () {
              if ($("input[name='CFV[568355]']").css("display") == "inline-block") {
                $("input[name='CFV[568355]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonsa1minus1").click(function () {
              if ($("input[name='CFV[568357]']").css("display") == "inline-block") {
                $("input[name='CFV[568357]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonsa1minus2").click(function () {
              if ($("input[name='CFV[568359]']").css("display") == "inline-block") {
                $("input[name='CFV[568359]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568353]']").parent().parent().css("display", "none");
          $("input[name='CFV[568355]']").parent().parent().css("display", "none");
          $("input[name='CFV[568357]']").parent().parent().css("display", "none");
          $("input[name='CFV[568359]']").parent().parent().css("display", "none");
        }
        //СКМ-мебель
        if ($("input[name='CFV[383011][742367]']").prop("checked")) {
          $("input[name='CFV[568361]']").parent().parent().css("display", "flex");
          let buttonsk1 = document.createElement("div");
          buttonsk1.id = "buttonsk1";
          const textmp = document.createTextNode("+");
          buttonsk1.appendChild(textmp);
          buttonsk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 45px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          sk.appendChild(buttonsk1);
          $("#buttonsk1").click(function () {
            if ($("input[name='CFV[568363]']").parent().parent().css("display") != "flex") {
              sk1.innerText = " ";
              $("input[name='CFV[568363]']").parent().parent().css("display", "flex");
              let buttonsk1minus = document.createElement("div");
              buttonsk1minus.id = "buttonsk1minus";
              const textminus = document.createTextNode("x");
              buttonsk1minus.appendChild(textminus);
              buttonsk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sk1.appendChild(buttonsk1minus);
            } else if ($("input[name='CFV[568365]']").parent().parent().css("display") != "flex") {
              sk2.innerText = " ";
              $("input[name='CFV[568365]']").parent().parent().css("display", "flex");
              let buttonsk1minus1 = document.createElement("div");
              buttonsk1minus1.id = "buttonsk1minus1";
              const textminus1 = document.createTextNode("x");
              buttonsk1minus1.appendChild(textminus1);
              buttonsk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sk2.appendChild(buttonsk1minus1);
            } else if ($("input[name='CFV[568367]']").parent().parent().css("display") != "flex") {
              sk3.innerText = " ";
              $("input[name='CFV[568367]']").parent().parent().css("display", "flex");
              let buttonsk1minus2 = document.createElement("div");
              buttonsk1minus2.id = "buttonsk1minus2";
              const textminus2 = document.createTextNode("x");
              buttonsk1minus2.appendChild(textminus2);
              buttonsk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              sk3.appendChild(buttonsk1minus2);
            }
            $("#buttonsk1minus").click(function () {
              if ($("input[name='CFV[568363]']").css("display") == "inline-block") {
                $("input[name='CFV[568363]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonsk1minus1").click(function () {
              if ($("input[name='CFV[568365]']").css("display") == "inline-block") {
                $("input[name='CFV[568365]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonsk1minus2").click(function () {
              if ($("input[name='CFV[568367]']").css("display") == "inline-block") {
                $("input[name='CFV[568367]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568361]']").parent().parent().css("display", "none");
          $("input[name='CFV[568363]']").parent().parent().css("display", "none");
          $("input[name='CFV[568365]']").parent().parent().css("display", "none");
          $("input[name='CFV[568367]']").parent().parent().css("display", "none");
        }
        //Теплодар
        if ($("input[name='CFV[383011][742369]']").prop("checked")) {
          $("input[name='CFV[568369]']").parent().parent().css("display", "flex");
          let buttontp1 = document.createElement("div");
          buttontp1.id = "buttontp1";
          const textmp = document.createTextNode("+");
          buttontp1.appendChild(textmp);
          buttontp1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 72px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          tp.appendChild(buttontp1);
          $("#buttontp1").click(function () {
            if ($("input[name='CFV[568371]']").parent().parent().css("display") != "flex") {
              tp1.innerText = " ";
              $("input[name='CFV[568371]']").parent().parent().css("display", "flex");
              let buttontp1minus = document.createElement("div");
              buttontp1minus.id = "buttontp1minus";
              const textminus = document.createTextNode("x");
              buttontp1minus.appendChild(textminus);
              buttontp1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              tp1.appendChild(buttontp1minus);
            } else if ($("input[name='CFV[568373]']").parent().parent().css("display") != "flex") {
              tp2.innerText = " ";
              $("input[name='CFV[568373]']").parent().parent().css("display", "flex");
              let buttontp1minus1 = document.createElement("div");
              buttontp1minus1.id = "buttontp1minus1";
              const textminus1 = document.createTextNode("x");
              buttontp1minus1.appendChild(textminus1);
              buttontp1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              tp2.appendChild(buttontp1minus1);
            } else if ($("input[name='CFV[568375]']").parent().parent().css("display") != "flex") {
              tp3.innerText = " ";
              $("input[name='CFV[568375]']").parent().parent().css("display", "flex");
              let buttontp1minus2 = document.createElement("div");
              buttontp1minus2.id = "buttontp1minus2";
              const textminus2 = document.createTextNode("x");
              buttontp1minus2.appendChild(textminus2);
              buttontp1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              tp3.appendChild(buttontp1minus2);
            }
            $("#buttontp1minus").click(function () {
              if ($("input[name='CFV[568371]']").css("display") == "inline-block") {
                $("input[name='CFV[568371]']").parent().parent().css("display", "none");
              }
            });
            $("#buttontp1minus1").click(function () {
              if ($("input[name='CFV[568373]']").css("display") == "inline-block") {
                $("input[name='CFV[568373]']").parent().parent().css("display", "none");
              }
            });
            $("#buttontp1minus2").click(function () {
              if ($("input[name='CFV[568375]']").css("display") == "inline-block") {
                $("input[name='CFV[568375]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568369]']").parent().parent().css("display", "none");
          $("input[name='CFV[568371]']").parent().parent().css("display", "none");
          $("input[name='CFV[568373]']").parent().parent().css("display", "none");
          $("input[name='CFV[568375]']").parent().parent().css("display", "none");
        }
        //АгроТитан
        if ($("input[name='CFV[383011][742371]']").prop("checked")) {
          $("input[name='CFV[568377]']").parent().parent().css("display", "flex");
          let buttonat1 = document.createElement("div");
          buttonat1.id = "buttonat1";
          const textmp = document.createTextNode("+");
          buttonat1.appendChild(textmp);
          buttonat1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 61px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          at.appendChild(buttonat1);
          $("#buttonat1").click(function () {
            if ($("input[name='CFV[568379]']").parent().parent().css("display") != "flex") {
              at1.innerText = " ";
              $("input[name='CFV[568379]']").parent().parent().css("display", "flex");
              let buttonat1minus = document.createElement("div");
              buttonat1minus.id = "buttonat1minus";
              const textminus = document.createTextNode("x");
              buttonat1minus.appendChild(textminus);
              buttonat1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              at1.appendChild(buttonat1minus);
            } else if ($("input[name='CFV[568381]']").parent().parent().css("display") != "flex") {
              at2.innerText = " ";
              $("input[name='CFV[568381]']").parent().parent().css("display", "flex");
              let buttonat1minus1 = document.createElement("div");
              buttonat1minus1.id = "buttonat1minus1";
              const textminus1 = document.createTextNode("x");
              buttonat1minus1.appendChild(textminus1);
              buttonat1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              at2.appendChild(buttonat1minus1);
            } else if ($("input[name='CFV[568383]']").parent().parent().css("display") != "flex") {
              at3.innerText = " ";
              $("input[name='CFV[568383]']").parent().parent().css("display", "flex");
              let buttonat1minus2 = document.createElement("div");
              buttonat1minus2.id = "buttonat1minus2";
              const textminus2 = document.createTextNode("x");
              buttonat1minus2.appendChild(textminus2);
              buttonat1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              at3.appendChild(buttonat1minus2);
            }
            $("#buttonat1minus").click(function () {
              if ($("input[name='CFV[568379]']").css("display") == "inline-block") {
                $("input[name='CFV[568379]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonat1minus1").click(function () {
              if ($("input[name='CFV[568381]']").css("display") == "inline-block") {
                $("input[name='CFV[568381]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonat1minus2").click(function () {
              if ($("input[name='CFV[568383]']").css("display") == "inline-block") {
                $("input[name='CFV[568383]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568377]']").parent().parent().css("display", "none");
          $("input[name='CFV[568379]']").parent().parent().css("display", "none");
          $("input[name='CFV[568381]']").parent().parent().css("display", "none");
          $("input[name='CFV[568383]']").parent().parent().css("display", "none");
        }
        //ФасадИнжиниринг
        if ($("input[name='CFV[383011][762999]']").prop("checked")) {
          $("input[name='CFV[568385]']").parent().parent().css("display", "flex");
          let buttonfa1 = document.createElement("div");
          buttonfa1.id = "buttonfa1";
          const textmp = document.createTextNode("+");
          buttonfa1.appendChild(textmp);
          buttonfa1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 7px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
          fa.appendChild(buttonfa1);
          $("#buttonfa1").click(function () {
            if ($("input[name='CFV[568387]']").parent().parent().css("display") != "flex") {
              fa1.innerText = " ";
              $("input[name='CFV[568387]']").parent().parent().css("display", "flex");
              let buttonfa1minus = document.createElement("div");
              buttonfa1minus.id = "buttonfa1minus";
              const textminus = document.createTextNode("x");
              buttonfa1minus.appendChild(textminus);
              buttonfa1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              fa1.appendChild(buttonfa1minus);
            } else if ($("input[name='CFV[568389]']").parent().parent().css("display") != "flex") {
              fa2.innerText = " ";
              $("input[name='CFV[568389]']").parent().parent().css("display", "flex");
              let buttonfa1minus1 = document.createElement("div");
              buttonfa1minus1.id = "buttonfa1minus1";
              const textminus1 = document.createTextNode("x");
              buttonfa1minus1.appendChild(textminus1);
              buttonfa1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              fa2.appendChild(buttonfa1minus1);
            } else if ($("input[name='CFV[568391]']").parent().parent().css("display") != "flex") {
              fa3.innerText = " ";
              $("input[name='CFV[568391]']").parent().parent().css("display", "flex");
              let buttonfa1minus2 = document.createElement("div");
              buttonfa1minus2.id = "buttonfa1minus2";
              const textminus2 = document.createTextNode("x");
              buttonfa1minus2.appendChild(textminus2);
              buttonfa1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
              fa3.appendChild(buttonfa1minus2);
            }
            $("#buttonfa1minus").click(function () {
              if ($("input[name='CFV[568387]']").css("display") == "inline-block") {
                $("input[name='CFV[568387]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonfa1minus1").click(function () {
              if ($("input[name='CFV[568389]']").css("display") == "inline-block") {
                $("input[name='CFV[568389]']").parent().parent().css("display", "none");
              }
            });
            $("#buttonfa1minus2").click(function () {
              if ($("input[name='CFV[568391]']").css("display") == "inline-block") {
                $("input[name='CFV[568391]']").parent().parent().css("display", "none");
              }
            });
          });
        } else {
          $("input[name='CFV[568385]']").parent().parent().css("display", "none");
          $("input[name='CFV[568387]']").parent().parent().css("display", "none");
          $("input[name='CFV[568389]']").parent().parent().css("display", "none");
          $("input[name='CFV[568391]']").parent().parent().css("display", "none");
        }

        $("input[name='CFV[383011][804485]'], input[name='CFV[383011][742307]'], input[name='CFV[383011][804771]'],input[name='CFV[383011][742309]'],input[name='CFV[383011][742311]'],input[name='CFV[383011][742313]'], input[name='CFV[383011][742315]'],input[name='CFV[383011][742317]'],input[name='CFV[383011][742319]'],input[name='CFV[383011][742321]'],input[name='CFV[383011][742323]'],input[name='CFV[383011][742325]'],input[name='CFV[383011][742327]'],input[name='CFV[383011][742329]'],input[name='CFV[383011][742331]'],input[name='CFV[383011][742333]'],input[name='CFV[383011][742335]'],input[name='CFV[383011][742337]'],input[name='CFV[383011][742339]'],input[name='CFV[383011][742341]'],input[name='CFV[383011][742343]'],input[name='CFV[383011][742345]'],input[name='CFV[383011][742347]'],input[name='CFV[383011][742349]'],input[name='CFV[383011][742351]'],input[name='CFV[383011][742353]'],input[name='CFV[383011][742355]'],input[name='CFV[383011][742357]'],input[name='CFV[383011][742359]'],input[name='CFV[383011][742361]'],input[name='CFV[383011][742363]'],input[name='CFV[383011][742365]'],input[name='CFV[383011][742367]'],input[name='CFV[383011][742369]'],input[name='CFV[383011][742371]'],input[name='CFV[383011][762999]']").click(function (e) {
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
          //Сибирский Бизнес
          if ($("input[name='CFV[383011][742317]']").prop("checked")) {
            $("input[name='CFV[568159]']").parent().parent().css("display", "flex");
            let buttonsb1 = document.createElement("div");
            buttonsb1.id = "buttonsb1";
            const textmp = document.createTextNode("+");
            buttonsb1.appendChild(textmp);
            buttonsb1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 10px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            sb.appendChild(buttonsb1);
            $("#buttonsb1").click(function () {
              if ($("input[name='CFV[568161]']").parent().parent().css("display") != "flex") {
                sb1.innerText = " ";
                $("input[name='CFV[568161]']").parent().parent().css("display", "flex");
                let buttonsb1minus = document.createElement("div");
                buttonsb1minus.id = "buttonsb1minus";
                const textminus = document.createTextNode("x");
                buttonsb1minus.appendChild(textminus);
                buttonsb1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sb1.appendChild(buttonsb1minus);
              } else if ($("input[name='CFV[568163]']").parent().parent().css("display") != "flex") {
                sb2.innerText = " ";
                $("input[name='CFV[568163]']").parent().parent().css("display", "flex");
                let buttonsb1minus1 = document.createElement("div");
                buttonsb1minus1.id = "buttonsb1minus1";
                const textminus1 = document.createTextNode("x");
                buttonsb1minus1.appendChild(textminus1);
                buttonsb1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sb2.appendChild(buttonsb1minus1);
              } else if ($("input[name='CFV[568165]']").parent().parent().css("display") != "flex") {
                sb3.innerText = " ";
                $("input[name='CFV[568165]']").parent().parent().css("display", "flex");
                let buttonsb1minus2 = document.createElement("div");
                buttonsb1minus2.id = "buttonsb1minus2";
                const textminus2 = document.createTextNode("x");
                buttonsb1minus2.appendChild(textminus2);
                buttonsb1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sb3.appendChild(buttonsb1minus2);
              }
              $("#buttonsb1minus").click(function () {
                if ($("input[name='CFV[568161]']").css("display") == "inline-block") {
                  $("input[name='CFV[568161]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonsb1minus1").click(function () {
                if ($("input[name='CFV[568163]']").css("display") == "inline-block") {
                  $("input[name='CFV[568163]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonsb1minus2").click(function () {
                if ($("input[name='CFV[568165]']").css("display") == "inline-block") {
                  $("input[name='CFV[568165]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568159]']").parent().parent().css("display", "none");
            $("input[name='CFV[568161]']").parent().parent().css("display", "none");
            $("input[name='CFV[568163]']").parent().parent().css("display", "none");
            $("input[name='CFV[568165]']").parent().parent().css("display", "none");
          }
          //СибТеплоКомплект
          if ($("input[name='CFV[383011][742319]']").prop("checked")) {
            $("input[name='CFV[568167]']").parent().parent().css("display", "flex");
            let buttonsbk1 = document.createElement("div");
            buttonsbk1.id = "buttonsbk1";
            const textmp = document.createTextNode("+");
            buttonsbk1.appendChild(textmp);
            buttonsbk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 39px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            sbk.appendChild(buttonsbk1);
            $("#buttonsbk1").click(function () {
              if ($("input[name='CFV[568169]']").parent().parent().css("display") != "flex") {
                sbk1.innerText = " ";
                $("input[name='CFV[568169]']").parent().parent().css("display", "flex");
                let buttonsbk1minus = document.createElement("div");
                buttonsbk1minus.id = "buttonsbk1minus";
                const textminus = document.createTextNode("x");
                buttonsbk1minus.appendChild(textminus);
                buttonsbk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sbk1.appendChild(buttonsbk1minus);
              } else if ($("input[name='CFV[568171]']").parent().parent().css("display") != "flex") {
                sbk2.innerText = " ";
                $("input[name='CFV[568171]']").parent().parent().css("display", "flex");
                let buttonsbk1minus1 = document.createElement("div");
                buttonsbk1minus1.id = "buttonsbk1minus1";
                const textminus1 = document.createTextNode("x");
                buttonsbk1minus1.appendChild(textminus1);
                buttonsbk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sbk2.appendChild(buttonsbk1minus1);
              } else if ($("input[name='CFV[568173]']").parent().parent().css("display") != "flex") {
                sbk3.innerText = " ";
                $("input[name='CFV[568173]']").parent().parent().css("display", "flex");
                let buttonsbk1minus2 = document.createElement("div");
                buttonsbk1minus2.id = "buttonsbk1minus2";
                const textminus2 = document.createTextNode("x");
                buttonsbk1minus2.appendChild(textminus2);
                buttonsbk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sbk3.appendChild(buttonsbk1minus2);
              }
              $("#buttonsbk1minus").click(function () {
                if ($("input[name='CFV[568169]']").css("display") == "inline-block") {
                  $("input[name='CFV[568169]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonsbk1minus1").click(function () {
                if ($("input[name='CFV[568171]']").css("display") == "inline-block") {
                  $("input[name='CFV[568171]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonsbk1minus2").click(function () {
                if ($("input[name='CFV[568173]']").css("display") == "inline-block") {
                  $("input[name='CFV[568173]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568167]']").parent().parent().css("display", "none");
            $("input[name='CFV[568169]']").parent().parent().css("display", "none");
            $("input[name='CFV[568171]']").parent().parent().css("display", "none");
            $("input[name='CFV[568173]']").parent().parent().css("display", "none");
          }
          //Максикров
          if ($("input[name='CFV[383011][742321]']").prop("checked")) {
            $("input[name='CFV[568175]']").parent().parent().css("display", "flex");
            let buttonmak1 = document.createElement("div");
            buttonmak1.id = "buttonmak1";
            const textmp = document.createTextNode("+");
            buttonmak1.appendChild(textmp);
            buttonmak1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 55px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            mak.appendChild(buttonmak1);
            $("#buttonmak1").click(function () {
              if ($("input[name='CFV[568177]']").parent().parent().css("display") != "flex") {
                mak1.innerText = " ";
                $("input[name='CFV[568177]']").parent().parent().css("display", "flex");
                let buttonmak1minus = document.createElement("div");
                buttonmak1minus.id = "buttonmak1minus";
                const textminus = document.createTextNode("x");
                buttonmak1minus.appendChild(textminus);
                buttonmak1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                mak1.appendChild(buttonmak1minus);
              } else if ($("input[name='CFV[568179]']").parent().parent().css("display") != "flex") {
                mak2.innerText = " ";
                $("input[name='CFV[568179]']").parent().parent().css("display", "flex");
                let buttonmak1minus1 = document.createElement("div");
                buttonmak1minus1.id = "buttonmak1minus1";
                const textminus1 = document.createTextNode("x");
                buttonmak1minus1.appendChild(textminus1);
                buttonmak1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                mak2.appendChild(buttonmak1minus1);
              } else if ($("input[name='CFV[568181]']").parent().parent().css("display") != "flex") {
                mak3.innerText = " ";
                $("input[name='CFV[568181]']").parent().parent().css("display", "flex");
                let buttonmak1minus2 = document.createElement("div");
                buttonmak1minus2.id = "buttonmak1minus2";
                const textminus2 = document.createTextNode("x");
                buttonmak1minus2.appendChild(textminus2);
                buttonmak1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                mak3.appendChild(buttonmak1minus2);
              }
              $("#buttonmak1minus").click(function () {
                if ($("input[name='CFV[568177]']").css("display") == "inline-block") {
                  $("input[name='CFV[568177]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonmak1minus1").click(function () {
                if ($("input[name='CFV[568179]']").css("display") == "inline-block") {
                  $("input[name='CFV[568179]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonmak1minus2").click(function () {
                if ($("input[name='CFV[568181]']").css("display") == "inline-block") {
                  $("input[name='CFV[568181]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568175]']").parent().parent().css("display", "none");
            $("input[name='CFV[568177]']").parent().parent().css("display", "none");
            $("input[name='CFV[568179]']").parent().parent().css("display", "none");
            $("input[name='CFV[568181]']").parent().parent().css("display", "none");
          }
          //Тегола
          if ($("input[name='CFV[383011][742323]']").prop("checked")) {
            $("input[name='CFV[568183]']").parent().parent().css("display", "flex");
            let buttonteg1 = document.createElement("div");
            buttonteg1.id = "buttonteg1";
            const textmp = document.createTextNode("+");
            buttonteg1.appendChild(textmp);
            buttonteg1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 85px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            teg.appendChild(buttonteg1);
            $("#buttonteg1").click(function () {
              if ($("input[name='CFV[568185]']").parent().parent().css("display") != "flex") {
                teg1.innerText = " ";
                $("input[name='CFV[568185]']").parent().parent().css("display", "flex");
                let buttonteg1minus = document.createElement("div");
                buttonteg1minus.id = "buttonteg1minus";
                const textminus = document.createTextNode("x");
                buttonteg1minus.appendChild(textminus);
                buttonteg1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                teg1.appendChild(buttonteg1minus);
              } else if ($("input[name='CFV[568187]']").parent().parent().css("display") != "flex") {
                teg2.innerText = " ";
                $("input[name='CFV[568187]']").parent().parent().css("display", "flex");
                let buttonteg1minus1 = document.createElement("div");
                buttonteg1minus1.id = "buttonteg1minus1";
                const textminus1 = document.createTextNode("x");
                buttonteg1minus1.appendChild(textminus1);
                buttonteg1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                teg2.appendChild(buttonteg1minus1);
              } else if ($("input[name='CFV[568189]']").parent().parent().css("display") != "flex") {
                teg3.innerText = " ";
                $("input[name='CFV[568189]']").parent().parent().css("display", "flex");
                let buttonteg1minus2 = document.createElement("div");
                buttonteg1minus2.id = "buttonteg1minus2";
                const textminus2 = document.createTextNode("x");
                buttonteg1minus2.appendChild(textminus2);
                buttonteg1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                teg3.appendChild(buttonteg1minus2);
              }
              $("#buttonteg1minus").click(function () {
                if ($("input[name='CFV[568185]']").css("display") == "inline-block") {
                  $("input[name='CFV[568185]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonteg1minus1").click(function () {
                if ($("input[name='CFV[568187]']").css("display") == "inline-block") {
                  $("input[name='CFV[568187]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonteg1minus2").click(function () {
                if ($("input[name='CFV[568189]']").css("display") == "inline-block") {
                  $("input[name='CFV[568189]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568183]']").parent().parent().css("display", "none");
            $("input[name='CFV[568185]']").parent().parent().css("display", "none");
            $("input[name='CFV[568187]']").parent().parent().css("display", "none");
            $("input[name='CFV[568189]']").parent().parent().css("display", "none");
          }
          //ИрПласт
          if ($("input[name='CFV[383011][742325]']").prop("checked")) {
            $("input[name='CFV[568191]']").parent().parent().css("display", "flex");
            let buttonir1 = document.createElement("div");
            buttonir1.id = "buttonir1";
            const textmp = document.createTextNode("+");
            buttonir1.appendChild(textmp);
            buttonir1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 71px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            ir.appendChild(buttonir1);
            $("#buttonir1").click(function () {
              if ($("input[name='CFV[568193]']").parent().parent().css("display") != "flex") {
                ir1.innerText = " ";
                $("input[name='CFV[568193]']").parent().parent().css("display", "flex");
                let buttonir1minus = document.createElement("div");
                buttonir1minus.id = "buttonir1minus";
                const textminus = document.createTextNode("x");
                buttonir1minus.appendChild(textminus);
                buttonir1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ir1.appendChild(buttonir1minus);
              } else if ($("input[name='CFV[568195]']").parent().parent().css("display") != "flex") {
                ir2.innerText = " ";
                $("input[name='CFV[568195]']").parent().parent().css("display", "flex");
                let buttonir1minus1 = document.createElement("div");
                buttonir1minus1.id = "buttonir1minus1";
                const textminus1 = document.createTextNode("x");
                buttonir1minus1.appendChild(textminus1);
                buttonir1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ir2.appendChild(buttonir1minus1);
              } else if ($("input[name='CFV[568197]']").parent().parent().css("display") != "flex") {
                ir3.innerText = " ";
                $("input[name='CFV[568197]']").parent().parent().css("display", "flex");
                let buttonir1minus2 = document.createElement("div");
                buttonir1minus2.id = "buttonir1minus2";
                const textminus2 = document.createTextNode("x");
                buttonir1minus2.appendChild(textminus2);
                buttonir1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ir3.appendChild(buttonir1minus2);
              }
              $("#buttonir1minus").click(function () {
                if ($("input[name='CFV[568193]']").css("display") == "inline-block") {
                  $("input[name='CFV[568193]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonir1minus1").click(function () {
                if ($("input[name='CFV[568195]']").css("display") == "inline-block") {
                  $("input[name='CFV[568195]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonir1minus2").click(function () {
                if ($("input[name='CFV[568197]']").css("display") == "inline-block") {
                  $("input[name='CFV[568197]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568191]']").parent().parent().css("display", "none");
            $("input[name='CFV[568193]']").parent().parent().css("display", "none");
            $("input[name='CFV[568195]']").parent().parent().css("display", "none");
            $("input[name='CFV[568197]']").parent().parent().css("display", "none");
          }
          //5 Веков
          if ($("input[name='CFV[383011][742327]']").prop("checked")) {
            $("input[name='CFV[568199]']").parent().parent().css("display", "flex");
            let buttonvek1 = document.createElement("div");
            buttonvek1.id = "buttonvek1";
            const textmp = document.createTextNode("+");
            buttonvek1.appendChild(textmp);
            buttonvek1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 80px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            vek.appendChild(buttonvek1);
            $("#buttonvek1").click(function () {
              if ($("input[name='CFV[568201]']").parent().parent().css("display") != "flex") {
                vek1.innerText = " ";
                $("input[name='CFV[568201]']").parent().parent().css("display", "flex");
                let buttonvek1minus = document.createElement("div");
                buttonvek1minus.id = "buttonvek1minus";
                const textminus = document.createTextNode("x");
                buttonvek1minus.appendChild(textminus);
                buttonvek1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                vek1.appendChild(buttonvek1minus);
              } else if ($("input[name='CFV[568203]']").parent().parent().css("display") != "flex") {
                vek2.innerText = " ";
                $("input[name='CFV[568203]']").parent().parent().css("display", "flex");
                let buttonvek1minus1 = document.createElement("div");
                buttonvek1minus1.id = "buttonvek1minus1";
                const textminus1 = document.createTextNode("x");
                buttonvek1minus1.appendChild(textminus1);
                buttonvek1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                vek2.appendChild(buttonvek1minus1);
              } else if ($("input[name='CFV[568205]']").parent().parent().css("display") != "flex") {
                vek3.innerText = " ";
                $("input[name='CFV[568205]']").parent().parent().css("display", "flex");
                let buttonvek1minus2 = document.createElement("div");
                buttonvek1minus2.id = "buttonvek1minus2";
                const textminus2 = document.createTextNode("x");
                buttonvek1minus2.appendChild(textminus2);
                buttonvek1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                vek3.appendChild(buttonvek1minus2);
              }
              $("#buttonvek1minus").click(function () {
                if ($("input[name='CFV[568201]']").css("display") == "inline-block") {
                  $("input[name='CFV[568201]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonvek1minus1").click(function () {
                if ($("input[name='CFV[568203]']").css("display") == "inline-block") {
                  $("input[name='CFV[568203]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonvek1minus2").click(function () {
                if ($("input[name='CFV[568205]']").css("display") == "inline-block") {
                  $("input[name='CFV[568205]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568199]']").parent().parent().css("display", "none");
            $("input[name='CFV[568201]']").parent().parent().css("display", "none");
            $("input[name='CFV[568203]']").parent().parent().css("display", "none");
            $("input[name='CFV[568205]']").parent().parent().css("display", "none");
          }
          //ЕКТ
          if ($("input[name='CFV[383011][742329]']").prop("checked")) {
            $("input[name='CFV[568207]']").parent().parent().css("display", "flex");
            let buttonekt1 = document.createElement("div");
            buttonekt1.id = "buttonekt1";
            const textmp = document.createTextNode("+");
            buttonekt1.appendChild(textmp);
            buttonekt1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 102px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            ekt.appendChild(buttonekt1);
            $("#buttonekt1").click(function () {
              if ($("input[name='CFV[568209]']").parent().parent().css("display") != "flex") {
                ekt1.innerText = " ";
                $("input[name='CFV[568209]']").parent().parent().css("display", "flex");
                let buttonekt1minus = document.createElement("div");
                buttonekt1minus.id = "buttonekt1minus";
                const textminus = document.createTextNode("x");
                buttonekt1minus.appendChild(textminus);
                buttonekt1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ekt1.appendChild(buttonekt1minus);
              } else if ($("input[name='CFV[568211]']").parent().parent().css("display") != "flex") {
                ekt2.innerText = " ";
                $("input[name='CFV[568211]']").parent().parent().css("display", "flex");
                let buttonekt1minus1 = document.createElement("div");
                buttonekt1minus1.id = "buttonekt1minus1";
                const textminus1 = document.createTextNode("x");
                buttonekt1minus1.appendChild(textminus1);
                buttonekt1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ekt2.appendChild(buttonekt1minus1);
              } else if ($("input[name='CFV[568213]']").parent().parent().css("display") != "flex") {
                ekt3.innerText = " ";
                $("input[name='CFV[568213]']").parent().parent().css("display", "flex");
                let buttonekt1minus2 = document.createElement("div");
                buttonekt1minus2.id = "buttonekt1minus2";
                const textminus2 = document.createTextNode("x");
                buttonekt1minus2.appendChild(textminus2);
                buttonekt1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ekt3.appendChild(buttonekt1minus2);
              }
              $("#buttonekt1minus").click(function () {
                if ($("input[name='CFV[568209]']").css("display") == "inline-block") {
                  $("input[name='CFV[568209]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonekt1minus1").click(function () {
                if ($("input[name='CFV[568211]']").css("display") == "inline-block") {
                  $("input[name='CFV[568211]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonekt1minus2").click(function () {
                if ($("input[name='CFV[568213]']").css("display") == "inline-block") {
                  $("input[name='CFV[568213]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568207]']").parent().parent().css("display", "none");
            $("input[name='CFV[568209]']").parent().parent().css("display", "none");
            $("input[name='CFV[568211]']").parent().parent().css("display", "none");
            $("input[name='CFV[568213]']").parent().parent().css("display", "none");
          }
          //СПК
          if ($("input[name='CFV[383011][742331]']").prop("checked")) {
            $("input[name='CFV[568215]']").parent().parent().css("display", "flex");
            let buttonspk1 = document.createElement("div");
            buttonspk1.id = "buttonspk1";
            const textmp = document.createTextNode("+");
            buttonspk1.appendChild(textmp);
            buttonspk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 101px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            spk.appendChild(buttonspk1);
            $("#buttonspk1").click(function () {
              if ($("input[name='CFV[568217]']").parent().parent().css("display") != "flex") {
                spk1.innerText = " ";
                $("input[name='CFV[568217]']").parent().parent().css("display", "flex");
                let buttonspk1minus = document.createElement("div");
                buttonspk1minus.id = "buttonspk1minus";
                const textminus = document.createTextNode("x");
                buttonspk1minus.appendChild(textminus);
                buttonspk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                spk1.appendChild(buttonspk1minus);
              } else if ($("input[name='CFV[568219]']").parent().parent().css("display") != "flex") {
                spk2.innerText = " ";
                $("input[name='CFV[568219]']").parent().parent().css("display", "flex");
                let buttonspk1minus1 = document.createElement("div");
                buttonspk1minus1.id = "buttonspk1minus1";
                const textminus1 = document.createTextNode("x");
                buttonspk1minus1.appendChild(textminus1);
                buttonspk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                spk2.appendChild(buttonspk1minus1);
              } else if ($("input[name='CFV[568221]']").parent().parent().css("display") != "flex") {
                spk3.innerText = " ";
                $("input[name='CFV[568221]']").parent().parent().css("display", "flex");
                let buttonspk1minus2 = document.createElement("div");
                buttonspk1minus2.id = "buttonspk1minus2";
                const textminus2 = document.createTextNode("x");
                buttonspk1minus2.appendChild(textminus2);
                buttonspk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                spk3.appendChild(buttonspk1minus2);
              }
              $("#buttonspk1minus").click(function () {
                if ($("input[name='CFV[568217]']").css("display") == "inline-block") {
                  $("input[name='CFV[568217]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonspk1minus1").click(function () {
                if ($("input[name='CFV[568219]']").css("display") == "inline-block") {
                  $("input[name='CFV[568219]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonspk1minus2").click(function () {
                if ($("input[name='CFV[568221]']").css("display") == "inline-block") {
                  $("input[name='CFV[568221]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568215]']").parent().parent().css("display", "none");
            $("input[name='CFV[568217]']").parent().parent().css("display", "none");
            $("input[name='CFV[568219]']").parent().parent().css("display", "none");
            $("input[name='CFV[568221]']").parent().parent().css("display", "none");
          }
          //Профит
          if ($("input[name='CFV[383011][742333]']").prop("checked")) {
            $("input[name='CFV[568223]']").parent().parent().css("display", "flex");
            let buttonpt1 = document.createElement("div");
            buttonpt1.id = "buttonpt1";
            const textmp = document.createTextNode("+");
            buttonpt1.appendChild(textmp);
            buttonpt1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 82px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            pt.appendChild(buttonpt1);
            $("#buttonpt1").click(function () {
              if ($("input[name='CFV[568225]']").parent().parent().css("display") != "flex") {
                pt1.innerText = " ";
                $("input[name='CFV[568225]']").parent().parent().css("display", "flex");
                let buttonpt1minus = document.createElement("div");
                buttonpt1minus.id = "buttonpt1minus";
                const textminus = document.createTextNode("x");
                buttonpt1minus.appendChild(textminus);
                buttonpt1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                pt1.appendChild(buttonpt1minus);
              } else if ($("input[name='CFV[568227]']").parent().parent().css("display") != "flex") {
                pt2.innerText = " ";
                $("input[name='CFV[568227]']").parent().parent().css("display", "flex");
                let buttonpt1minus1 = document.createElement("div");
                buttonpt1minus1.id = "buttonpt1minus1";
                const textminus1 = document.createTextNode("x");
                buttonpt1minus1.appendChild(textminus1);
                buttonpt1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                pt2.appendChild(buttonpt1minus1);
              } else if ($("input[name='CFV[568229]']").parent().parent().css("display") != "flex") {
                pt3.innerText = " ";
                $("input[name='CFV[568229]']").parent().parent().css("display", "flex");
                let buttonpt1minus2 = document.createElement("div");
                buttonpt1minus2.id = "buttonpt1minus2";
                const textminus2 = document.createTextNode("x");
                buttonpt1minus2.appendChild(textminus2);
                buttonpt1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                pt3.appendChild(buttonpt1minus2);
              }
              $("#buttonpt1minus").click(function () {
                if ($("input[name='CFV[568225]']").css("display") == "inline-block") {
                  $("input[name='CFV[568225]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonpt1minus1").click(function () {
                if ($("input[name='CFV[568227]']").css("display") == "inline-block") {
                  $("input[name='CFV[568227]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonpt1minus2").click(function () {
                if ($("input[name='CFV[568229]']").css("display") == "inline-block") {
                  $("input[name='CFV[568229]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568223]']").parent().parent().css("display", "none");
            $("input[name='CFV[568225]']").parent().parent().css("display", "none");
            $("input[name='CFV[568227]']").parent().parent().css("display", "none");
            $("input[name='CFV[568229]']").parent().parent().css("display", "none");
          }
          //Пластик и Крепеж
          if ($("input[name='CFV[383011][742335]']").prop("checked")) {
            $("input[name='CFV[568231]']").parent().parent().css("display", "flex");
            let buttonpk1 = document.createElement("div");
            buttonpk1.id = "buttonpk1";
            const textmp = document.createTextNode("+");
            buttonpk1.appendChild(textmp);
            buttonpk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 14px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            pk.appendChild(buttonpk1);
            $("#buttonpk1").click(function () {
              if ($("input[name='CFV[568233]']").parent().parent().css("display") != "flex") {
                pk1.innerText = " ";
                $("input[name='CFV[568233]']").parent().parent().css("display", "flex");
                let buttonpk1minus = document.createElement("div");
                buttonpk1minus.id = "buttonpk1minus";
                const textminus = document.createTextNode("x");
                buttonpk1minus.appendChild(textminus);
                buttonpk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                pk1.appendChild(buttonpk1minus);
              } else if ($("input[name='CFV[568235]']").parent().parent().css("display") != "flex") {
                pk2.innerText = " ";
                $("input[name='CFV[568235]']").parent().parent().css("display", "flex");
                let buttonpk1minus1 = document.createElement("div");
                buttonpk1minus1.id = "buttonpk1minus1";
                const textminus1 = document.createTextNode("x");
                buttonpk1minus1.appendChild(textminus1);
                buttonpk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                pk2.appendChild(buttonpk1minus1);
              } else if ($("input[name='CFV[568237]']").parent().parent().css("display") != "flex") {
                pk3.innerText = " ";
                $("input[name='CFV[568237]']").parent().parent().css("display", "flex");
                let buttonpk1minus2 = document.createElement("div");
                buttonpk1minus2.id = "buttonpk1minus2";
                const textminus2 = document.createTextNode("x");
                buttonpk1minus2.appendChild(textminus2);
                buttonpk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                pk3.appendChild(buttonpk1minus2);
              }
              $("#buttonpk1minus").click(function () {
                if ($("input[name='CFV[568233]']").css("display") == "inline-block") {
                  $("input[name='CFV[568233]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonpk1minus1").click(function () {
                if ($("input[name='CFV[568235]']").css("display") == "inline-block") {
                  $("input[name='CFV[568235]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonpk1minus2").click(function () {
                if ($("input[name='CFV[568237]']").css("display") == "inline-block") {
                  $("input[name='CFV[568237]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568231]']").parent().parent().css("display", "none");
            $("input[name='CFV[568233]']").parent().parent().css("display", "none");
            $("input[name='CFV[568235]']").parent().parent().css("display", "none");
            $("input[name='CFV[568237]']").parent().parent().css("display", "none");
          }
          //Русклимат
          if ($("input[name='CFV[383011][742337]']").prop("checked")) {
            $("input[name='CFV[568239]']").parent().parent().css("display", "flex");
            let buttonrs1 = document.createElement("div");
            buttonrs1.id = "buttonrs1";
            const textmp = document.createTextNode("+");
            buttonrs1.appendChild(textmp);
            buttonrs1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 59px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            rs.appendChild(buttonrs1);
            $("#buttonrs1").click(function () {
              if ($("input[name='CFV[568241]']").parent().parent().css("display") != "flex") {
                rs1.innerText = " ";
                $("input[name='CFV[568241]']").parent().parent().css("display", "flex");
                let buttonrs1minus = document.createElement("div");
                buttonrs1minus.id = "buttonrs1minus";
                const textminus = document.createTextNode("x");
                buttonrs1minus.appendChild(textminus);
                buttonrs1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                rs1.appendChild(buttonrs1minus);
              } else if ($("input[name='CFV[568243]']").parent().parent().css("display") != "flex") {
                rs2.innerText = " ";
                $("input[name='CFV[568243]']").parent().parent().css("display", "flex");
                let buttonrs1minus1 = document.createElement("div");
                buttonrs1minus1.id = "buttonrs1minus1";
                const textminus1 = document.createTextNode("x");
                buttonrs1minus1.appendChild(textminus1);
                buttonrs1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                rs2.appendChild(buttonrs1minus1);
              } else if ($("input[name='CFV[568245]']").parent().parent().css("display") != "flex") {
                rs3.innerText = " ";
                $("input[name='CFV[568245]']").parent().parent().css("display", "flex");
                let buttonrs1minus2 = document.createElement("div");
                buttonrs1minus2.id = "buttonrs1minus2";
                const textminus2 = document.createTextNode("x");
                buttonrs1minus2.appendChild(textminus2);
                buttonrs1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                rs3.appendChild(buttonrs1minus2);
              }
              $("#buttonrs1minus").click(function () {
                if ($("input[name='CFV[568241]']").css("display") == "inline-block") {
                  $("input[name='CFV[568241]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonrs1minus1").click(function () {
                if ($("input[name='CFV[568243]']").css("display") == "inline-block") {
                  $("input[name='CFV[568243]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonrs1minus2").click(function () {
                if ($("input[name='CFV[568245]']").css("display") == "inline-block") {
                  $("input[name='CFV[568245]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568239]']").parent().parent().css("display", "none");
            $("input[name='CFV[568241]']").parent().parent().css("display", "none");
            $("input[name='CFV[568243]']").parent().parent().css("display", "none");
            $("input[name='CFV[568245]']").parent().parent().css("display", "none");
          }
          //Юпласт
          if ($("input[name='CFV[383011][742339]']").prop("checked")) {
            $("input[name='CFV[568247]']").parent().parent().css("display", "flex");
            let buttonyu1 = document.createElement("div");
            buttonyu1.id = "buttonyu1";
            const textmp = document.createTextNode("+");
            buttonyu1.appendChild(textmp);
            buttonyu1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 78px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            yu.appendChild(buttonyu1);
            $("#buttonyu1").click(function () {
              if ($("input[name='CFV[568249]']").parent().parent().css("display") != "flex") {
                yu1.innerText = " ";
                $("input[name='CFV[568249]']").parent().parent().css("display", "flex");
                let buttonyu1minus = document.createElement("div");
                buttonyu1minus.id = "buttonyu1minus";
                const textminus = document.createTextNode("x");
                buttonyu1minus.appendChild(textminus);
                buttonyu1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                yu1.appendChild(buttonyu1minus);
              } else if ($("input[name='CFV[568251]']").parent().parent().css("display") != "flex") {
                yu2.innerText = " ";
                $("input[name='CFV[568251]']").parent().parent().css("display", "flex");
                let buttonyu1minus1 = document.createElement("div");
                buttonyu1minus1.id = "buttonyu1minus1";
                const textminus1 = document.createTextNode("x");
                buttonyu1minus1.appendChild(textminus1);
                buttonyu1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                yu2.appendChild(buttonyu1minus1);
              } else if ($("input[name='CFV[568253]']").parent().parent().css("display") != "flex") {
                yu3.innerText = " ";
                $("input[name='CFV[568253]']").parent().parent().css("display", "flex");
                let buttonyu1minus2 = document.createElement("div");
                buttonyu1minus2.id = "buttonyu1minus2";
                const textminus2 = document.createTextNode("x");
                buttonyu1minus2.appendChild(textminus2);
                buttonyu1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                yu3.appendChild(buttonyu1minus2);
              }
              $("#buttonyu1minus").click(function () {
                if ($("input[name='CFV[568249]']").css("display") == "inline-block") {
                  $("input[name='CFV[568249]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonyu1minus1").click(function () {
                if ($("input[name='CFV[568251]']").css("display") == "inline-block") {
                  $("input[name='CFV[568251]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonyu1minus2").click(function () {
                if ($("input[name='CFV[568253]']").css("display") == "inline-block") {
                  $("input[name='CFV[568253]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568247]']").parent().parent().css("display", "none");
            $("input[name='CFV[568249]']").parent().parent().css("display", "none");
            $("input[name='CFV[568251]']").parent().parent().css("display", "none");
            $("input[name='CFV[568253]']").parent().parent().css("display", "none");
          }
          //Гекса
          if ($("input[name='CFV[383011][742341]']").prop("checked")) {
            $("input[name='CFV[568255]']").parent().parent().css("display", "flex");
            let buttongk1 = document.createElement("div");
            buttongk1.id = "buttongk1";
            const textmp = document.createTextNode("+");
            buttongk1.appendChild(textmp);
            buttongk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 89px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            gk.appendChild(buttongk1);
            $("#buttongk1").click(function () {
              if ($("input[name='CFV[568257]']").parent().parent().css("display") != "flex") {
                gk1.innerText = " ";
                $("input[name='CFV[568257]']").parent().parent().css("display", "flex");
                let buttongk1minus = document.createElement("div");
                buttongk1minus.id = "buttongk1minus";
                const textminus = document.createTextNode("x");
                buttongk1minus.appendChild(textminus);
                buttongk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                gk1.appendChild(buttongk1minus);
              } else if ($("input[name='CFV[568259]']").parent().parent().css("display") != "flex") {
                gk2.innerText = " ";
                $("input[name='CFV[568259]']").parent().parent().css("display", "flex");
                let buttongk1minus1 = document.createElement("div");
                buttongk1minus1.id = "buttongk1minus1";
                const textminus1 = document.createTextNode("x");
                buttongk1minus1.appendChild(textminus1);
                buttongk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                gk2.appendChild(buttongk1minus1);
              } else if ($("input[name='CFV[568261]']").parent().parent().css("display") != "flex") {
                gk3.innerText = " ";
                $("input[name='CFV[568261]']").parent().parent().css("display", "flex");
                let buttongk1minus2 = document.createElement("div");
                buttongk1minus2.id = "buttongk1minus2";
                const textminus2 = document.createTextNode("x");
                buttongk1minus2.appendChild(textminus2);
                buttongk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                gk3.appendChild(buttongk1minus2);
              }
              $("#buttongk1minus").click(function () {
                if ($("input[name='CFV[568257]']").css("display") == "inline-block") {
                  $("input[name='CFV[568257]']").parent().parent().css("display", "none");
                }
              });
              $("#buttongk1minus1").click(function () {
                if ($("input[name='CFV[568259]']").css("display") == "inline-block") {
                  $("input[name='CFV[568259]']").parent().parent().css("display", "none");
                }
              });
              $("#buttongk1minus2").click(function () {
                if ($("input[name='CFV[568261]']").css("display") == "inline-block") {
                  $("input[name='CFV[568261]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568255]']").parent().parent().css("display", "none");
            $("input[name='CFV[568257]']").parent().parent().css("display", "none");
            $("input[name='CFV[568259]']").parent().parent().css("display", "none");
            $("input[name='CFV[568261]']").parent().parent().css("display", "none");
          }
          //Фитинг 24
          if ($("input[name='CFV[383011][742343]']").prop("checked")) {
            $("input[name='CFV[568263]']").parent().parent().css("display", "flex");
            let buttonft1 = document.createElement("div");
            buttonft1.id = "buttonft1";
            const textmp = document.createTextNode("+");
            buttonft1.appendChild(textmp);
            buttonft1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 63px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            ft.appendChild(buttonft1);
            $("#buttonft1").click(function () {
              if ($("input[name='CFV[568265]']").parent().parent().css("display") != "flex") {
                ft1.innerText = " ";
                $("input[name='CFV[568265]']").parent().parent().css("display", "flex");
                let buttonft1minus = document.createElement("div");
                buttonft1minus.id = "buttonft1minus";
                const textminus = document.createTextNode("x");
                buttonft1minus.appendChild(textminus);
                buttonft1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ft1.appendChild(buttonft1minus);
              } else if ($("input[name='CFV[568267]']").parent().parent().css("display") != "flex") {
                ft2.innerText = " ";
                $("input[name='CFV[568267]']").parent().parent().css("display", "flex");
                let buttonft1minus1 = document.createElement("div");
                buttonft1minus1.id = "buttonft1minus1";
                const textminus1 = document.createTextNode("x");
                buttonft1minus1.appendChild(textminus1);
                buttonft1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ft2.appendChild(buttonft1minus1);
              } else if ($("input[name='CFV[568269]']").parent().parent().css("display") != "flex") {
                ft3.innerText = " ";
                $("input[name='CFV[568269]']").parent().parent().css("display", "flex");
                let buttonft1minus2 = document.createElement("div");
                buttonft1minus2.id = "buttonft1minus2";
                const textminus2 = document.createTextNode("x");
                buttonft1minus2.appendChild(textminus2);
                buttonft1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ft3.appendChild(buttonft1minus2);
              }
              $("#buttonft1minus").click(function () {
                if ($("input[name='CFV[568265]']").css("display") == "inline-block") {
                  $("input[name='CFV[568265]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonft1minus1").click(function () {
                if ($("input[name='CFV[568267]']").css("display") == "inline-block") {
                  $("input[name='CFV[568267]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonft1minus2").click(function () {
                if ($("input[name='CFV[568269]']").css("display") == "inline-block") {
                  $("input[name='CFV[568269]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568263]']").parent().parent().css("display", "none");
            $("input[name='CFV[568265]']").parent().parent().css("display", "none");
            $("input[name='CFV[568267]']").parent().parent().css("display", "none");
            $("input[name='CFV[568269]']").parent().parent().css("display", "none");
          }
          //ГенПоставка
          if ($("input[name='CFV[383011][742345]']").prop("checked")) {
            $("input[name='CFV[568271]']").parent().parent().css("display", "flex");
            let buttongp1 = document.createElement("div");
            buttongp1.id = "buttongp1";
            const textmp = document.createTextNode("+");
            buttongp1.appendChild(textmp);
            buttongp1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 42px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            gp.appendChild(buttongp1);
            $("#buttongp1").click(function () {
              if ($("input[name='CFV[568273]']").parent().parent().css("display") != "flex") {
                gp1.innerText = " ";
                $("input[name='CFV[568273]']").parent().parent().css("display", "flex");
                let buttongp1minus = document.createElement("div");
                buttongp1minus.id = "buttongp1minus";
                const textminus = document.createTextNode("x");
                buttongp1minus.appendChild(textminus);
                buttongp1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                gp1.appendChild(buttongp1minus);
              } else if ($("input[name='CFV[568275]']").parent().parent().css("display") != "flex") {
                gp2.innerText = " ";
                $("input[name='CFV[568275]']").parent().parent().css("display", "flex");
                let buttongp1minus1 = document.createElement("div");
                buttongp1minus1.id = "buttongp1minus1";
                const textminus1 = document.createTextNode("x");
                buttongp1minus1.appendChild(textminus1);
                buttongp1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                gp2.appendChild(buttongp1minus1);
              } else if ($("input[name='CFV[568277]']").parent().parent().css("display") != "flex") {
                gp3.innerText = " ";
                $("input[name='CFV[568277]']").parent().parent().css("display", "flex");
                let buttongp1minus2 = document.createElement("div");
                buttongp1minus2.id = "buttongp1minus2";
                const textminus2 = document.createTextNode("x");
                buttongp1minus2.appendChild(textminus2);
                buttongp1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                gp3.appendChild(buttongp1minus2);
              }
              $("#buttongp1minus").click(function () {
                if ($("input[name='CFV[568273]']").css("display") == "inline-block") {
                  $("input[name='CFV[568273]']").parent().parent().css("display", "none");
                }
              });
              $("#buttongp1minus1").click(function () {
                if ($("input[name='CFV[568275]']").css("display") == "inline-block") {
                  $("input[name='CFV[568275]']").parent().parent().css("display", "none");
                }
              });
              $("#buttongp1minus2").click(function () {
                if ($("input[name='CFV[568277]']").css("display") == "inline-block") {
                  $("input[name='CFV[568277]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568271]']").parent().parent().css("display", "none");
            $("input[name='CFV[568273]']").parent().parent().css("display", "none");
            $("input[name='CFV[568275]']").parent().parent().css("display", "none");
            $("input[name='CFV[568277]']").parent().parent().css("display", "none");
          }
          //Маяк
          if ($("input[name='CFV[383011][742347]']").prop("checked")) {
            $("input[name='CFV[568279]']").parent().parent().css("display", "flex");
            let buttonma1 = document.createElement("div");
            buttonma1.id = "buttonma1";
            const textmp = document.createTextNode("+");
            buttonma1.appendChild(textmp);
            buttonma1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 86px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            ma.appendChild(buttonma1);
            $("#buttonma1").click(function () {
              if ($("input[name='CFV[568281]']").parent().parent().css("display") != "flex") {
                ma1.innerText = " ";
                $("input[name='CFV[568281]']").parent().parent().css("display", "flex");
                let buttonma1minus = document.createElement("div");
                buttonma1minus.id = "buttonma1minus";
                const textminus = document.createTextNode("x");
                buttonma1minus.appendChild(textminus);
                buttonma1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ma1.appendChild(buttonma1minus);
              } else if ($("input[name='CFV[568283]']").parent().parent().css("display") != "flex") {
                ma2.innerText = " ";
                $("input[name='CFV[568283]']").parent().parent().css("display", "flex");
                let buttonma1minus1 = document.createElement("div");
                buttonma1minus1.id = "buttonma1minus1";
                const textminus1 = document.createTextNode("x");
                buttonma1minus1.appendChild(textminus1);
                buttonma1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ma2.appendChild(buttonma1minus1);
              } else if ($("input[name='CFV[568285]']").parent().parent().css("display") != "flex") {
                ma3.innerText = " ";
                $("input[name='CFV[568285]']").parent().parent().css("display", "flex");
                let buttonma1minus2 = document.createElement("div");
                buttonma1minus2.id = "buttonma1minus2";
                const textminus2 = document.createTextNode("x");
                buttonma1minus2.appendChild(textminus2);
                buttonma1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                ma3.appendChild(buttonma1minus2);
              }
              $("#buttonma1minus").click(function () {
                if ($("input[name='CFV[568281]']").css("display") == "inline-block") {
                  $("input[name='CFV[568281]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonma1minus1").click(function () {
                if ($("input[name='CFV[568283]']").css("display") == "inline-block") {
                  $("input[name='CFV[568283]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonma1minus2").click(function () {
                if ($("input[name='CFV[568285]']").css("display") == "inline-block") {
                  $("input[name='CFV[568285]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568279]']").parent().parent().css("display", "none");
            $("input[name='CFV[568281]']").parent().parent().css("display", "none");
            $("input[name='CFV[568283]']").parent().parent().css("display", "none");
            $("input[name='CFV[568285]']").parent().parent().css("display", "none");
          }
          //Феррум
          if ($("input[name='CFV[383011][742349]']").prop("checked")) {
            $("input[name='CFV[568287]']").parent().parent().css("display", "flex");
            let buttonfe1 = document.createElement("div");
            buttonfe1.id = "buttonfe1";
            const textmp = document.createTextNode("+");
            buttonfe1.appendChild(textmp);
            buttonfe1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 81px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            fe.appendChild(buttonfe1);
            $("#buttonfe1").click(function () {
              if ($("input[name='CFV[568289]']").parent().parent().css("display") != "flex") {
                fe1.innerText = " ";
                $("input[name='CFV[568289]']").parent().parent().css("display", "flex");
                let buttonfe1minus = document.createElement("div");
                buttonfe1minus.id = "buttonfe1minus";
                const textminus = document.createTextNode("x");
                buttonfe1minus.appendChild(textminus);
                buttonfe1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                fe1.appendChild(buttonfe1minus);
              } else if ($("input[name='CFV[568291]']").parent().parent().css("display") != "flex") {
                fe2.innerText = " ";
                $("input[name='CFV[568291]']").parent().parent().css("display", "flex");
                let buttonfe1minus1 = document.createElement("div");
                buttonfe1minus1.id = "buttonfe1minus1";
                const textminus1 = document.createTextNode("x");
                buttonfe1minus1.appendChild(textminus1);
                buttonfe1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                fe2.appendChild(buttonfe1minus1);
              } else if ($("input[name='CFV[568293]']").parent().parent().css("display") != "flex") {
                fe3.innerText = " ";
                $("input[name='CFV[568293]']").parent().parent().css("display", "flex");
                let buttonfe1minus2 = document.createElement("div");
                buttonfe1minus2.id = "buttonfe1minus2";
                const textminus2 = document.createTextNode("x");
                buttonfe1minus2.appendChild(textminus2);
                buttonfe1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                fe3.appendChild(buttonfe1minus2);
              }
              $("#buttonfe1minus").click(function () {
                if ($("input[name='CFV[568289]']").css("display") == "inline-block") {
                  $("input[name='CFV[568289]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonfe1minus1").click(function () {
                if ($("input[name='CFV[568291]']").css("display") == "inline-block") {
                  $("input[name='CFV[568291]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonfe1minus2").click(function () {
                if ($("input[name='CFV[568293]']").css("display") == "inline-block") {
                  $("input[name='CFV[568293]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568287]']").parent().parent().css("display", "none");
            $("input[name='CFV[568289]']").parent().parent().css("display", "none");
            $("input[name='CFV[568291]']").parent().parent().css("display", "none");
            $("input[name='CFV[568293]']").parent().parent().css("display", "none");
          }
          //ТеплоКом
          if ($("input[name='CFV[383011][742351]']").prop("checked")) {
            $("input[name='CFV[568295]']").parent().parent().css("display", "flex");
            let buttontk1 = document.createElement("div");
            buttontk1.id = "buttontk1";
            const textmp = document.createTextNode("+");
            buttontk1.appendChild(textmp);
            buttontk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 61px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            tk.appendChild(buttontk1);
            $("#buttontk1").click(function () {
              if ($("input[name='CFV[568297]']").parent().parent().css("display") != "flex") {
                tk1.innerText = " ";
                $("input[name='CFV[568297]']").parent().parent().css("display", "flex");
                let buttontk1minus = document.createElement("div");
                buttontk1minus.id = "buttontk1minus";
                const textminus = document.createTextNode("x");
                buttontk1minus.appendChild(textminus);
                buttontk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                tk1.appendChild(buttontk1minus);
              } else if ($("input[name='CFV[568303]']").parent().parent().css("display") != "flex") {
                tk2.innerText = " ";
                $("input[name='CFV[568303]']").parent().parent().css("display", "flex");
                let buttontk1minus1 = document.createElement("div");
                buttontk1minus1.id = "buttontk1minus1";
                const textminus1 = document.createTextNode("x");
                buttontk1minus1.appendChild(textminus1);
                buttontk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                tk2.appendChild(buttontk1minus1);
              } else if ($("input[name='CFV[568301]']").parent().parent().css("display") != "flex") {
                tk3.innerText = " ";
                $("input[name='CFV[568301]']").parent().parent().css("display", "flex");
                let buttontk1minus2 = document.createElement("div");
                buttontk1minus2.id = "buttontk1minus2";
                const textminus2 = document.createTextNode("x");
                buttontk1minus2.appendChild(textminus2);
                buttontk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                tk3.appendChild(buttontk1minus2);
              }
              $("#buttontk1minus").click(function () {
                if ($("input[name='CFV[568297]']").css("display") == "inline-block") {
                  $("input[name='CFV[568297]']").parent().parent().css("display", "none");
                }
              });
              $("#buttontk1minus1").click(function () {
                if ($("input[name='CFV[568303]']").css("display") == "inline-block") {
                  $("input[name='CFV[568303]']").parent().parent().css("display", "none");
                }
              });
              $("#buttontk1minus2").click(function () {
                if ($("input[name='CFV[568301]']").css("display") == "inline-block") {
                  $("input[name='CFV[568301]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568295]']").parent().parent().css("display", "none");
            $("input[name='CFV[568297]']").parent().parent().css("display", "none");
            $("input[name='CFV[568303]']").parent().parent().css("display", "none");
            $("input[name='CFV[568301]']").parent().parent().css("display", "none");
          }
          //Современныеокна
          if ($("input[name='CFV[383011][742353]']").prop("checked")) {
            $("input[name='CFV[568305]']").parent().parent().css("display", "flex");
            let buttonso1 = document.createElement("div");
            buttonso1.id = "buttonso1";
            const textmp = document.createTextNode("+");
            buttonso1.appendChild(textmp);
            buttonso1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 6px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            so.appendChild(buttonso1);
            $("#buttonso1").click(function () {
              if ($("input[name='CFV[568307]']").parent().parent().css("display") != "flex") {
                so1.innerText = " ";
                $("input[name='CFV[568307]']").parent().parent().css("display", "flex");
                let buttonso1minus = document.createElement("div");
                buttonso1minus.id = "buttonso1minus";
                const textminus = document.createTextNode("x");
                buttonso1minus.appendChild(textminus);
                buttonso1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                so1.appendChild(buttonso1minus);
              } else if ($("input[name='CFV[568309]']").parent().parent().css("display") != "flex") {
                so2.innerText = " ";
                $("input[name='CFV[568309]']").parent().parent().css("display", "flex");
                let buttonso1minus1 = document.createElement("div");
                buttonso1minus1.id = "buttonso1minus1";
                const textminus1 = document.createTextNode("x");
                buttonso1minus1.appendChild(textminus1);
                buttonso1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                so2.appendChild(buttonso1minus1);
              } else if ($("input[name='CFV[568311]']").parent().parent().css("display") != "flex") {
                so3.innerText = " ";
                $("input[name='CFV[568311]']").parent().parent().css("display", "flex");
                let buttonso1minus2 = document.createElement("div");
                buttonso1minus2.id = "buttonso1minus2";
                const textminus2 = document.createTextNode("x");
                buttonso1minus2.appendChild(textminus2);
                buttonso1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                so3.appendChild(buttonso1minus2);
              }
              $("#buttonso1minus").click(function () {
                if ($("input[name='CFV[568307]']").css("display") == "inline-block") {
                  $("input[name='CFV[568307]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonso1minus1").click(function () {
                if ($("input[name='CFV[568309]']").css("display") == "inline-block") {
                  $("input[name='CFV[568309]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonso1minus2").click(function () {
                if ($("input[name='CFV[568311]']").css("display") == "inline-block") {
                  $("input[name='CFV[568311]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568305]']").parent().parent().css("display", "none");
            $("input[name='CFV[568307]']").parent().parent().css("display", "none");
            $("input[name='CFV[568309]']").parent().parent().css("display", "none");
            $("input[name='CFV[568311]']").parent().parent().css("display", "none");
          }
          //Полимет
          if ($("input[name='CFV[383011][742355]']").prop("checked")) {
            $("input[name='CFV[568313]']").parent().parent().css("display", "flex");
            let buttonpo1 = document.createElement("div");
            buttonpo1.id = "buttonpo1";
            const textmp = document.createTextNode("+");
            buttonpo1.appendChild(textmp);
            buttonpo1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 78px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            po.appendChild(buttonpo1);
            $("#buttonpo1").click(function () {
              if ($("input[name='CFV[568315]']").parent().parent().css("display") != "flex") {
                po1.innerText = " ";
                $("input[name='CFV[568315]']").parent().parent().css("display", "flex");
                let buttonpo1minus = document.createElement("div");
                buttonpo1minus.id = "buttonpo1minus";
                const textminus = document.createTextNode("x");
                buttonpo1minus.appendChild(textminus);
                buttonpo1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                po1.appendChild(buttonpo1minus);
              } else if ($("input[name='CFV[568317]']").parent().parent().css("display") != "flex") {
                po2.innerText = " ";
                $("input[name='CFV[568317]']").parent().parent().css("display", "flex");
                let buttonpo1minus1 = document.createElement("div");
                buttonpo1minus1.id = "buttonpo1minus1";
                const textminus1 = document.createTextNode("x");
                buttonpo1minus1.appendChild(textminus1);
                buttonpo1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                po2.appendChild(buttonpo1minus1);
              } else if ($("input[name='CFV[568319]']").parent().parent().css("display") != "flex") {
                po3.innerText = " ";
                $("input[name='CFV[568319]']").parent().parent().css("display", "flex");
                let buttonpo1minus2 = document.createElement("div");
                buttonpo1minus2.id = "buttonpo1minus2";
                const textminus2 = document.createTextNode("x");
                buttonpo1minus2.appendChild(textminus2);
                buttonpo1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                po3.appendChild(buttonpo1minus2);
              }
              $("#buttonpo1minus").click(function () {
                if ($("input[name='CFV[568315]']").css("display") == "inline-block") {
                  $("input[name='CFV[568315]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonpo1minus1").click(function () {
                if ($("input[name='CFV[568317]']").css("display") == "inline-block") {
                  $("input[name='CFV[568317]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonpo1minus2").click(function () {
                if ($("input[name='CFV[568319]']").css("display") == "inline-block") {
                  $("input[name='CFV[568319]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568313]']").parent().parent().css("display", "none");
            $("input[name='CFV[568315]']").parent().parent().css("display", "none");
            $("input[name='CFV[568317]']").parent().parent().css("display", "none");
            $("input[name='CFV[568319]']").parent().parent().css("display", "none");
          }
          //Финестра
          if ($("input[name='CFV[383011][742357]']").prop("checked")) {
            $("input[name='CFV[568321]']").parent().parent().css("display", "flex");
            let buttonfi1 = document.createElement("div");
            buttonfi1.id = "buttonfi1";
            const textmp = document.createTextNode("+");
            buttonfi1.appendChild(textmp);
            buttonfi1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 75px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            fi.appendChild(buttonfi1);
            $("#buttonfi1").click(function () {
              if ($("input[name='CFV[568323]']").parent().parent().css("display") != "flex") {
                fi1.innerText = " ";
                $("input[name='CFV[568323]']").parent().parent().css("display", "flex");
                let buttonfi1minus = document.createElement("div");
                buttonfi1minus.id = "buttonfi1minus";
                const textminus = document.createTextNode("x");
                buttonfi1minus.appendChild(textminus);
                buttonfi1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                fi1.appendChild(buttonfi1minus);
              } else if ($("input[name='CFV[568325]']").parent().parent().css("display") != "flex") {
                fi2.innerText = " ";
                $("input[name='CFV[568325]']").parent().parent().css("display", "flex");
                let buttonfi1minus1 = document.createElement("div");
                buttonfi1minus1.id = "buttonfi1minus1";
                const textminus1 = document.createTextNode("x");
                buttonfi1minus1.appendChild(textminus1);
                buttonfi1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                fi2.appendChild(buttonfi1minus1);
              } else if ($("input[name='CFV[568327]']").parent().parent().css("display") != "flex") {
                fi3.innerText = " ";
                $("input[name='CFV[568327]']").parent().parent().css("display", "flex");
                let buttonfi1minus2 = document.createElement("div");
                buttonfi1minus2.id = "buttonfi1minus2";
                const textminus2 = document.createTextNode("x");
                buttonfi1minus2.appendChild(textminus2);
                buttonfi1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                fi3.appendChild(buttonfi1minus2);
              }
              $("#buttonfi1minus").click(function () {
                if ($("input[name='CFV[568323]']").css("display") == "inline-block") {
                  $("input[name='CFV[568323]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonfi1minus1").click(function () {
                if ($("input[name='CFV[568325]']").css("display") == "inline-block") {
                  $("input[name='CFV[568325]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonfi1minus2").click(function () {
                if ($("input[name='CFV[568327]']").css("display") == "inline-block") {
                  $("input[name='CFV[568327]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568321]']").parent().parent().css("display", "none");
            $("input[name='CFV[568323]']").parent().parent().css("display", "none");
            $("input[name='CFV[568325]']").parent().parent().css("display", "none");
            $("input[name='CFV[568327]']").parent().parent().css("display", "none");
          }
          //ТехноНиколь
          if ($("input[name='CFV[383011][742359]']").prop("checked")) {
            $("input[name='CFV[568329]']").parent().parent().css("display", "flex");
            let buttontn1 = document.createElement("div");
            buttontn1.id = "buttontn1";
            const textmp = document.createTextNode("+");
            buttontn1.appendChild(textmp);
            buttontn1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 42px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            tn.appendChild(buttontn1);
            $("#buttontn1").click(function () {
              if ($("input[name='CFV[568331]']").parent().parent().css("display") != "flex") {
                tn1.innerText = " ";
                $("input[name='CFV[568331]']").parent().parent().css("display", "flex");
                let buttontn1minus = document.createElement("div");
                buttontn1minus.id = "buttontn1minus";
                const textminus = document.createTextNode("x");
                buttontn1minus.appendChild(textminus);
                buttontn1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                tn1.appendChild(buttontn1minus);
              } else if ($("input[name='CFV[568333]']").parent().parent().css("display") != "flex") {
                tn2.innerText = " ";
                $("input[name='CFV[568333]']").parent().parent().css("display", "flex");
                let buttontn1minus1 = document.createElement("div");
                buttontn1minus1.id = "buttontn1minus1";
                const textminus1 = document.createTextNode("x");
                buttontn1minus1.appendChild(textminus1);
                buttontn1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                tn2.appendChild(buttontn1minus1);
              } else if ($("input[name='CFV[568335]']").parent().parent().css("display") != "flex") {
                tn3.innerText = " ";
                $("input[name='CFV[568335]']").parent().parent().css("display", "flex");
                let buttontn1minus2 = document.createElement("div");
                buttontn1minus2.id = "buttontn1minus2";
                const textminus2 = document.createTextNode("x");
                buttontn1minus2.appendChild(textminus2);
                buttontn1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                tn3.appendChild(buttontn1minus2);
              }
              $("#buttontn1minus").click(function () {
                if ($("input[name='CFV[568331]']").css("display") == "inline-block") {
                  $("input[name='CFV[568331]']").parent().parent().css("display", "none");
                }
              });
              $("#buttontn1minus1").click(function () {
                if ($("input[name='CFV[568333]']").css("display") == "inline-block") {
                  $("input[name='CFV[568333]']").parent().parent().css("display", "none");
                }
              });
              $("#buttontn1minus2").click(function () {
                if ($("input[name='CFV[568335]']").css("display") == "inline-block") {
                  $("input[name='CFV[568335]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568329]']").parent().parent().css("display", "none");
            $("input[name='CFV[568331]']").parent().parent().css("display", "none");
            $("input[name='CFV[568333]']").parent().parent().css("display", "none");
            $("input[name='CFV[568335]']").parent().parent().css("display", "none");
          }
          //Водолей
          if ($("input[name='CFV[383011][742361]']").prop("checked")) {
            $("input[name='CFV[568337]']").parent().parent().css("display", "flex");
            let buttonvo1 = document.createElement("div");
            buttonvo1.id = "buttonvo1";
            const textmp = document.createTextNode("+");
            buttonvo1.appendChild(textmp);
            buttonvo1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 79px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            vo.appendChild(buttonvo1);
            $("#buttonvo1").click(function () {
              if ($("input[name='CFV[568339]']").parent().parent().css("display") != "flex") {
                vo1.innerText = " ";
                $("input[name='CFV[568339]']").parent().parent().css("display", "flex");
                let buttonvo1minus = document.createElement("div");
                buttonvo1minus.id = "buttonvo1minus";
                const textminus = document.createTextNode("x");
                buttonvo1minus.appendChild(textminus);
                buttonvo1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                vo1.appendChild(buttonvo1minus);
              } else if ($("input[name='CFV[568341]']").parent().parent().css("display") != "flex") {
                vo2.innerText = " ";
                $("input[name='CFV[568341]']").parent().parent().css("display", "flex");
                let buttonvo1minus1 = document.createElement("div");
                buttonvo1minus1.id = "buttonvo1minus1";
                const textminus1 = document.createTextNode("x");
                buttonvo1minus1.appendChild(textminus1);
                buttonvo1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                vo2.appendChild(buttonvo1minus1);
              } else if ($("input[name='CFV[568343]']").parent().parent().css("display") != "flex") {
                vo3.innerText = " ";
                $("input[name='CFV[568343]']").parent().parent().css("display", "flex");
                let buttonvo1minus2 = document.createElement("div");
                buttonvo1minus2.id = "buttonvo1minus2";
                const textminus2 = document.createTextNode("x");
                buttonvo1minus2.appendChild(textminus2);
                buttonvo1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                vo3.appendChild(buttonvo1minus2);
              }
              $("#buttonvo1minus").click(function () {
                if ($("input[name='CFV[568339]']").css("display") == "inline-block") {
                  $("input[name='CFV[568339]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonvo1minus1").click(function () {
                if ($("input[name='CFV[568341]']").css("display") == "inline-block") {
                  $("input[name='CFV[568341]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonvo1minus2").click(function () {
                if ($("input[name='CFV[568343]']").css("display") == "inline-block") {
                  $("input[name='CFV[568343]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568337]']").parent().parent().css("display", "none");
            $("input[name='CFV[568339]']").parent().parent().css("display", "none");
            $("input[name='CFV[568341]']").parent().parent().css("display", "none");
            $("input[name='CFV[568343]']").parent().parent().css("display", "none");
          }
          //Амбар
          if ($("input[name='CFV[383011][742363]']").prop("checked")) {
            $("input[name='CFV[568345]']").parent().parent().css("display", "flex");
            let buttonam1 = document.createElement("div");
            buttonam1.id = "buttonam1";
            const textmp = document.createTextNode("+");
            buttonam1.appendChild(textmp);
            buttonam1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 85px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            am.appendChild(buttonam1);
            $("#buttonam1").click(function () {
              if ($("input[name='CFV[568347]']").parent().parent().css("display") != "flex") {
                am1.innerText = " ";
                $("input[name='CFV[568347]']").parent().parent().css("display", "flex");
                let buttonam1minus = document.createElement("div");
                buttonam1minus.id = "buttonam1minus";
                const textminus = document.createTextNode("x");
                buttonam1minus.appendChild(textminus);
                buttonam1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                am1.appendChild(buttonam1minus);
              } else if ($("input[name='CFV[568349]']").parent().parent().css("display") != "flex") {
                am2.innerText = " ";
                $("input[name='CFV[568349]']").parent().parent().css("display", "flex");
                let buttonam1minus1 = document.createElement("div");
                buttonam1minus1.id = "buttonam1minus1";
                const textminus1 = document.createTextNode("x");
                buttonam1minus1.appendChild(textminus1);
                buttonam1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                am2.appendChild(buttonam1minus1);
              } else if ($("input[name='CFV[568351]']").parent().parent().css("display") != "flex") {
                am3.innerText = " ";
                $("input[name='CFV[568351]']").parent().parent().css("display", "flex");
                let buttonam1minus2 = document.createElement("div");
                buttonam1minus2.id = "buttonam1minus2";
                const textminus2 = document.createTextNode("x");
                buttonam1minus2.appendChild(textminus2);
                buttonam1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                am3.appendChild(buttonam1minus2);
              }
              $("#buttonam1minus").click(function () {
                if ($("input[name='CFV[568347]']").css("display") == "inline-block") {
                  $("input[name='CFV[568347]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonam1minus1").click(function () {
                if ($("input[name='CFV[568349]']").css("display") == "inline-block") {
                  $("input[name='CFV[568349]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonam1minus2").click(function () {
                if ($("input[name='CFV[568351]']").css("display") == "inline-block") {
                  $("input[name='CFV[568351]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568345]']").parent().parent().css("display", "none");
            $("input[name='CFV[568347]']").parent().parent().css("display", "none");
            $("input[name='CFV[568349]']").parent().parent().css("display", "none");
            $("input[name='CFV[568351]']").parent().parent().css("display", "none");
          }
          //Сатурн
          if ($("input[name='CFV[383011][742365]']").prop("checked")) {
            $("input[name='CFV[568353]']").parent().parent().css("display", "flex");
            let buttonsa1 = document.createElement("div");
            buttonsa1.id = "buttonsa1";
            const textmp = document.createTextNode("+");
            buttonsa1.appendChild(textmp);
            buttonsa1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 85px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            sa.appendChild(buttonsa1);
            $("#buttonsa1").click(function () {
              if ($("input[name='CFV[568355]']").parent().parent().css("display") != "flex") {
                sa1.innerText = " ";
                $("input[name='CFV[568355]']").parent().parent().css("display", "flex");
                let buttonsa1minus = document.createElement("div");
                buttonsa1minus.id = "buttonsa1minus";
                const textminus = document.createTextNode("x");
                buttonsa1minus.appendChild(textminus);
                buttonsa1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sa1.appendChild(buttonsa1minus);
              } else if ($("input[name='CFV[568357]']").parent().parent().css("display") != "flex") {
                sa2.innerText = " ";
                $("input[name='CFV[568357]']").parent().parent().css("display", "flex");
                let buttonsa1minus1 = document.createElement("div");
                buttonsa1minus1.id = "buttonsa1minus1";
                const textminus1 = document.createTextNode("x");
                buttonsa1minus1.appendChild(textminus1);
                buttonsa1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sa2.appendChild(buttonsa1minus1);
              } else if ($("input[name='CFV[568359]']").parent().parent().css("display") != "flex") {
                sa3.innerText = " ";
                $("input[name='CFV[568359]']").parent().parent().css("display", "flex");
                let buttonsa1minus2 = document.createElement("div");
                buttonsa1minus2.id = "buttonsa1minus2";
                const textminus2 = document.createTextNode("x");
                buttonsa1minus2.appendChild(textminus2);
                buttonsa1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sa3.appendChild(buttonsa1minus2);
              }
              $("#buttonsa1minus").click(function () {
                if ($("input[name='CFV[568355]']").css("display") == "inline-block") {
                  $("input[name='CFV[568355]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonsa1minus1").click(function () {
                if ($("input[name='CFV[568357]']").css("display") == "inline-block") {
                  $("input[name='CFV[568357]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonsa1minus2").click(function () {
                if ($("input[name='CFV[568359]']").css("display") == "inline-block") {
                  $("input[name='CFV[568359]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568353]']").parent().parent().css("display", "none");
            $("input[name='CFV[568355]']").parent().parent().css("display", "none");
            $("input[name='CFV[568357]']").parent().parent().css("display", "none");
            $("input[name='CFV[568359]']").parent().parent().css("display", "none");
          }
          //СКМ-мебель
          if ($("input[name='CFV[383011][742367]']").prop("checked")) {
            $("input[name='CFV[568361]']").parent().parent().css("display", "flex");
            let buttonsk1 = document.createElement("div");
            buttonsk1.id = "buttonsk1";
            const textmp = document.createTextNode("+");
            buttonsk1.appendChild(textmp);
            buttonsk1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 45px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            sk.appendChild(buttonsk1);
            $("#buttonsk1").click(function () {
              if ($("input[name='CFV[568363]']").parent().parent().css("display") != "flex") {
                sk1.innerText = " ";
                $("input[name='CFV[568363]']").parent().parent().css("display", "flex");
                let buttonsk1minus = document.createElement("div");
                buttonsk1minus.id = "buttonsk1minus";
                const textminus = document.createTextNode("x");
                buttonsk1minus.appendChild(textminus);
                buttonsk1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sk1.appendChild(buttonsk1minus);
              } else if ($("input[name='CFV[568365]']").parent().parent().css("display") != "flex") {
                sk2.innerText = " ";
                $("input[name='CFV[568365]']").parent().parent().css("display", "flex");
                let buttonsk1minus1 = document.createElement("div");
                buttonsk1minus1.id = "buttonsk1minus1";
                const textminus1 = document.createTextNode("x");
                buttonsk1minus1.appendChild(textminus1);
                buttonsk1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sk2.appendChild(buttonsk1minus1);
              } else if ($("input[name='CFV[568367]']").parent().parent().css("display") != "flex") {
                sk3.innerText = " ";
                $("input[name='CFV[568367]']").parent().parent().css("display", "flex");
                let buttonsk1minus2 = document.createElement("div");
                buttonsk1minus2.id = "buttonsk1minus2";
                const textminus2 = document.createTextNode("x");
                buttonsk1minus2.appendChild(textminus2);
                buttonsk1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                sk3.appendChild(buttonsk1minus2);
              }
              $("#buttonsk1minus").click(function () {
                if ($("input[name='CFV[568363]']").css("display") == "inline-block") {
                  $("input[name='CFV[568363]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonsk1minus1").click(function () {
                if ($("input[name='CFV[568365]']").css("display") == "inline-block") {
                  $("input[name='CFV[568365]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonsk1minus2").click(function () {
                if ($("input[name='CFV[568367]']").css("display") == "inline-block") {
                  $("input[name='CFV[568367]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568361]']").parent().parent().css("display", "none");
            $("input[name='CFV[568363]']").parent().parent().css("display", "none");
            $("input[name='CFV[568365]']").parent().parent().css("display", "none");
            $("input[name='CFV[568367]']").parent().parent().css("display", "none");
          }
          //Теплодар
          if ($("input[name='CFV[383011][742369]']").prop("checked")) {
            $("input[name='CFV[568369]']").parent().parent().css("display", "flex");
            let buttontp1 = document.createElement("div");
            buttontp1.id = "buttontp1";
            const textmp = document.createTextNode("+");
            buttontp1.appendChild(textmp);
            buttontp1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 72px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            tp.appendChild(buttontp1);
            $("#buttontp1").click(function () {
              if ($("input[name='CFV[568371]']").parent().parent().css("display") != "flex") {
                tp1.innerText = " ";
                $("input[name='CFV[568371]']").parent().parent().css("display", "flex");
                let buttontp1minus = document.createElement("div");
                buttontp1minus.id = "buttontp1minus";
                const textminus = document.createTextNode("x");
                buttontp1minus.appendChild(textminus);
                buttontp1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                tp1.appendChild(buttontp1minus);
              } else if ($("input[name='CFV[568373]']").parent().parent().css("display") != "flex") {
                tp2.innerText = " ";
                $("input[name='CFV[568373]']").parent().parent().css("display", "flex");
                let buttontp1minus1 = document.createElement("div");
                buttontp1minus1.id = "buttontp1minus1";
                const textminus1 = document.createTextNode("x");
                buttontp1minus1.appendChild(textminus1);
                buttontp1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                tp2.appendChild(buttontp1minus1);
              } else if ($("input[name='CFV[568375]']").parent().parent().css("display") != "flex") {
                tp3.innerText = " ";
                $("input[name='CFV[568375]']").parent().parent().css("display", "flex");
                let buttontp1minus2 = document.createElement("div");
                buttontp1minus2.id = "buttontp1minus2";
                const textminus2 = document.createTextNode("x");
                buttontp1minus2.appendChild(textminus2);
                buttontp1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                tp3.appendChild(buttontp1minus2);
              }
              $("#buttontp1minus").click(function () {
                if ($("input[name='CFV[568371]']").css("display") == "inline-block") {
                  $("input[name='CFV[568371]']").parent().parent().css("display", "none");
                }
              });
              $("#buttontp1minus1").click(function () {
                if ($("input[name='CFV[568373]']").css("display") == "inline-block") {
                  $("input[name='CFV[568373]']").parent().parent().css("display", "none");
                }
              });
              $("#buttontp1minus2").click(function () {
                if ($("input[name='CFV[568375]']").css("display") == "inline-block") {
                  $("input[name='CFV[568375]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568369]']").parent().parent().css("display", "none");
            $("input[name='CFV[568371]']").parent().parent().css("display", "none");
            $("input[name='CFV[568373]']").parent().parent().css("display", "none");
            $("input[name='CFV[568375]']").parent().parent().css("display", "none");
          }
          //АгроТитан
          if ($("input[name='CFV[383011][742371]']").prop("checked")) {
            $("input[name='CFV[568377]']").parent().parent().css("display", "flex");
            let buttonat1 = document.createElement("div");
            buttonat1.id = "buttonat1";
            const textmp = document.createTextNode("+");
            buttonat1.appendChild(textmp);
            buttonat1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 61px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            at.appendChild(buttonat1);
            $("#buttonat1").click(function () {
              if ($("input[name='CFV[568379]']").parent().parent().css("display") != "flex") {
                at1.innerText = " ";
                $("input[name='CFV[568379]']").parent().parent().css("display", "flex");
                let buttonat1minus = document.createElement("div");
                buttonat1minus.id = "buttonat1minus";
                const textminus = document.createTextNode("x");
                buttonat1minus.appendChild(textminus);
                buttonat1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                at1.appendChild(buttonat1minus);
              } else if ($("input[name='CFV[568381]']").parent().parent().css("display") != "flex") {
                at2.innerText = " ";
                $("input[name='CFV[568381]']").parent().parent().css("display", "flex");
                let buttonat1minus1 = document.createElement("div");
                buttonat1minus1.id = "buttonat1minus1";
                const textminus1 = document.createTextNode("x");
                buttonat1minus1.appendChild(textminus1);
                buttonat1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                at2.appendChild(buttonat1minus1);
              } else if ($("input[name='CFV[568383]']").parent().parent().css("display") != "flex") {
                at3.innerText = " ";
                $("input[name='CFV[568383]']").parent().parent().css("display", "flex");
                let buttonat1minus2 = document.createElement("div");
                buttonat1minus2.id = "buttonat1minus2";
                const textminus2 = document.createTextNode("x");
                buttonat1minus2.appendChild(textminus2);
                buttonat1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                at3.appendChild(buttonat1minus2);
              }
              $("#buttonat1minus").click(function () {
                if ($("input[name='CFV[568379]']").css("display") == "inline-block") {
                  $("input[name='CFV[568379]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonat1minus1").click(function () {
                if ($("input[name='CFV[568381]']").css("display") == "inline-block") {
                  $("input[name='CFV[568381]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonat1minus2").click(function () {
                if ($("input[name='CFV[568383]']").css("display") == "inline-block") {
                  $("input[name='CFV[568383]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568377]']").parent().parent().css("display", "none");
            $("input[name='CFV[568379]']").parent().parent().css("display", "none");
            $("input[name='CFV[568381]']").parent().parent().css("display", "none");
            $("input[name='CFV[568383]']").parent().parent().css("display", "none");
          }
          //ФасадИнжиниринг
          if ($("input[name='CFV[383011][762999]']").prop("checked")) {
            $("input[name='CFV[568385]']").parent().parent().css("display", "flex");
            let buttonfa1 = document.createElement("div");
            buttonfa1.id = "buttonfa1";
            const textmp = document.createTextNode("+");
            buttonfa1.appendChild(textmp);
            buttonfa1.style = "border: 1px solid green; border-radius: 50%;width: 10px; height: 10px; margin-left: 7px;padding: 2px;text-align: center;font-size: 8.1pt;font-weight: bold; display: inline-block;";
            fa.appendChild(buttonfa1);
            $("#buttonfa1").click(function () {
              if ($("input[name='CFV[568387]']").parent().parent().css("display") != "flex") {
                fa1.innerText = " ";
                $("input[name='CFV[568387]']").parent().parent().css("display", "flex");
                let buttonfa1minus = document.createElement("div");
                buttonfa1minus.id = "buttonfa1minus";
                const textminus = document.createTextNode("x");
                buttonfa1minus.appendChild(textminus);
                buttonfa1minus.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                fa1.appendChild(buttonfa1minus);
              } else if ($("input[name='CFV[568389]']").parent().parent().css("display") != "flex") {
                fa2.innerText = " ";
                $("input[name='CFV[568389]']").parent().parent().css("display", "flex");
                let buttonfa1minus1 = document.createElement("div");
                buttonfa1minus1.id = "buttonfa1minus1";
                const textminus1 = document.createTextNode("x");
                buttonfa1minus1.appendChild(textminus1);
                buttonfa1minus1.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                fa2.appendChild(buttonfa1minus1);
              } else if ($("input[name='CFV[568391]']").parent().parent().css("display") != "flex") {
                fa3.innerText = " ";
                $("input[name='CFV[568391]']").parent().parent().css("display", "flex");
                let buttonfa1minus2 = document.createElement("div");
                buttonfa1minus2.id = "buttonfa1minus2";
                const textminus2 = document.createTextNode("x");
                buttonfa1minus2.appendChild(textminus2);
                buttonfa1minus2.style = "border: 1px solid red; border-radius: 50%;width: 10px; height: 10px; margin-left: 127px;font-size: 7.4pt;padding: 2px;text-align: center;font-weight: bold; display: inline-block;";
                fa3.appendChild(buttonfa1minus2);
              }
              $("#buttonfa1minus").click(function () {
                if ($("input[name='CFV[568387]']").css("display") == "inline-block") {
                  $("input[name='CFV[568387]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonfa1minus1").click(function () {
                if ($("input[name='CFV[568389]']").css("display") == "inline-block") {
                  $("input[name='CFV[568389]']").parent().parent().css("display", "none");
                }
              });
              $("#buttonfa1minus2").click(function () {
                if ($("input[name='CFV[568391]']").css("display") == "inline-block") {
                  $("input[name='CFV[568391]']").parent().parent().css("display", "none");
                }
              });
            });
          } else {
            $("input[name='CFV[568385]']").parent().parent().css("display", "none");
            $("input[name='CFV[568387]']").parent().parent().css("display", "none");
            $("input[name='CFV[568389]']").parent().parent().css("display", "none");
            $("input[name='CFV[568391]']").parent().parent().css("display", "none");
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
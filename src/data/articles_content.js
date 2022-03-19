import Parser from "html-react-parser";

const articles = [
    {
        id: 101,
        title: 'Anonim Sirketler',
        date: '20.02.2018',
        // eslint-disable-next-line no-multi-str
        content: Parser('<font color="#313131"><font face="Arial, serif"><font size="5" style="font-size: 16pt"><b>Anonim  \
        Şirket Nedir?</b></font></font></font></p> \
        <p> \
        <br/> \
         </p>  \
        <p>  \
        <font color="#313131"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Anonim şirkette en az 1 ortak yani pay sahibi gerekir. Bu ortaklar kamu  \
        borçlarından sorumlu değildir. Anonim şirkette hissenin devri \
        konusunda noter onayı gerekmez. Şirketin anonim olabilmesi için \
        her şirketin temel ihtiyacı olan&nbsp;</font></font></font><a href="https://www.ofmark.com/ofis-kirtasiye-malzemeleri-c3/"><font color="#e57373"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><u>ofis \
        ve kırtasiye malzemeleri&nbsp;</u></font></font></font></a><font color="#313131"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ve \
        diğer ihtiyaçlar için asgari 50.000 TL sermaye olması gerekir. \
        Anonim şirkette üst kademede genel kurul ve yönetim kurulu olarak \
        iki organ oluşur. Yönetim kurulunda en az bir kişi olur. Bu \
        kurulun üyelerini genel kurul seçer. Vergi istisnası konusunda da \
        anonim şirket pay senedinin elde edilmesinden sonra iki yıl içinde \
        satılırsa satıştan gelen gelir, vergiye tabi olmaz ve bu konuda \
        bir istisna tanınır.&nbsp;</font></font></font></p> \
        <p> \
        <br/> \
        </p> \
        <p> \
        <font color="#313131"><font face="Arial, serif"><font size="5" style="font-size: 16pt"><b>Limited \
        Şirket Nedir?</b></font></font></font></p> \
        <p> \
        <br/> \
        </p> \
        <p> \
        <font color="#313131"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Limited \
        şirket, kanunen yasak olmayan her türlü ekonomik amaç ve konu \
        için kurulabilir. Şirketi kurmak için tek bir kişi yani tek ortak \
        yeterlidir. Ortak sayısı elliye kadar çıkabilir ancak elliyi \
        aşamaz. Limited şirketi kurmak için gereken asgari sermaye miktarı \
        10.000 TL olmalıdır. Ofisin ihtiyacı olan&nbsp;</font></font></font><font color="#e57373"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><u><a href="http://ofmark.com/yazici-ve-fotokopi-kagitlari-c13/">kağıt&nbsp;</a><a href="https://www.ofmark.com/yazici-ve-fotokopi-kagitlari-c13/">ürünleri</a></u></font></font></font><font color="#313131"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">&nbsp;ve \
        diğer malzemeler bu sermaye ile karşılanır. Limited şirket \
        ortakları taahhüt ettikleri sermaye oranında vergi borçlarından \
        sorumludurlar. Bu şirketlerde hisse devri noter huzurunda \
        gerçekleşir. Önceden hazırlanan devir sözleşmesi onaylanır, \
        genel kurulda kabul edilir ve ticaret siciline tescil edilir. Limited \
        şirket organları, müdürler kurulu ve genel kuruldan oluşur. \
        Müdürleri genel kurul seçer. Limited şirkette şirket hissesinin \
        kaç yıl sonra satıldığı fark etmeksizin elde edilen kazanç, \
        gelir vergisine tabidir.</font></font></font></p> \
        <p> \
        <br/> \
        </p> \
        <p> \
        <font color="#313131"><font face="Arial, serif"><font size="5" style="font-size: 16pt"><b>Anonim \
        Şirket ve Limited Şirket Arasında Farklar</b></font></font></font></p> \
        <p> \
        <br/> \
        <br/> \
        </p> \
        <p> \
        <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#313131">Anonim \
        ve limited şirket arasındaki en bariz fark sermaye miktarıdır. \
        Limited şirkette en az 10.000 TL sermaye yeterliyken anonim şirkette \
        bu alt sınır 50.000 TL olmak zorundadır. Kamu borçları \
        sorumluluğu bakımından anonim şirket ortaklarının sorumluluğu \
        bulunmaz. Ancak limited şirket ortakları, taahhüt ettikleri \
        sermaye oranında vergi borcu sorumluluğuna sahiptir. Bir başka \
        ayrım ise hisse devrindedir. Anonim şirketlerin hisse devri için \
        noter onayı ve tescil işlemi gerekmez. Ancak limited şirkette \
        hisse devri noter huzurunda ve genel kurulun kabulü ile gerçekleşir. \
        Vergi istisnası konusunda ise limited şirket hissesi satıldığında \
        elde edilen kazanç gelir vergisine tabi olur. Anonim şirkette ise \
        pay senedinin elde edilmesinden itibaren iki yıl içerisinde \
        satılırsa elde edilen kazanç, gelir vergisine tabi olmaz.&nbsp;</font></font></font></p> \
        <h2 class="western" style="line-height: 0.22in; margin-top: 0in; margin-bottom: 0in"> \
        <b><font color="#313131"><font face="Arial, serif"><font size="5" style="font-size: 16pt">Anonim \
        Şirket ve Limited Şirketler Arasındaki Benzerlikler</font></font></font></b></h2> \
        <p> \
        <br/> \
        </p> \
        <p> \
        <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#313131">Her \
        iki şirket türünde de&nbsp;</font><font color="#0000ff"><u><a href="http://ofmark.com/genel-ofis-malzemeleri-c1997/"><font color="#e57373">genel \
        ofis malzemeleri</font></a></u></font><font color="#313131">&nbsp;için \
        asgari bir sermaye miktarı zorunludms word to react componentur. Şirket türüne göre \
        değişen bu miktar şirketin ilk adımı için önemlidir. Yine bu \
        şirketlerin genel kurul, müdürler ya da yönetim kurulundan oluşan \
        üst organları mutlaka bulunur. Bu organlar şirketin yönetiminde \
        ve işleyişinde söz sahibidir. İki farklı şirkette de hisseler \
        devredilebilir. Bu şirketlerin bir diğer ortak noktası ise kanunen \
        yasaklanmamış olan her türlü ekonomik faaliyetin \
        gerçekleştirilebilmesidir. Her iki şirkette de şirket \
        ortaklarının onayı olmadan şirketle rekabet oluşturan işlerde \
        bulunulamaz. Anonim ve limited şirketlerde şirket kârının \
        ortaklara dağıtılması % 15 stopaja tabidir. Tasfiye yani kapatma \
        süresi iki şirket türünde de en az 6 aydır. Açılan şirket bu \
        süreden daha erken kapatılamaz.</font></font></font></p> \
        '),
        // eslint-disable-next-line no-multi-str
        subtext: 'Limited şirkette en az 10.000 TL sermaye yeterliyken anonim şirkette \
        bu alt sınır 50.000 TL olmak zorundadır. Kamu borçları \
        sorumluluğu bakımından anonim şirket ortaklarının sorumluluğu \
        bulunmaz.',
        writer: 'Kilic | Cetinkaya'
    },
    {
        id: 102,
        title: 'TASINMAZ SATISI',
        date: '10.06.2019',
        // eslint-disable-next-line no-multi-str
        content: Parser('<h2> \
        <span style="display: inline-block; border: none; padding: 0in"><font color="#222222"><font face="Segoe UI, serif"><font size="3" style="font-size: 12pt"><b>TAŞINMAZ \
        SATIŞI</span></font></font></font></b></h2> \
        <p> \
        <br/> \
        <br/> \
        </p> \
        <ol> \
            <li><p> \
            <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif"><b>İmar-Çap</b></font></font></font></font></p> \
        </ol> \
        <p> \
        <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif">İlamlı \
        ya da ilamsız usullerde açılan icra takibinin neticesinde borçlu \
        ve varsa taşınmaz malikine tebligatlar usulüne uygun şekilde \
        tebliğ edilir. Dosya ilamsız takip ise tebliğden 30 gün sonra \
        ilamlı takip ise icra takibi başlar başlamaz hemen satış \
        işlemlerine başlanılabilir. İlamlı icra takiplerinde ilk \
        yapılması gereken işlem, icra dairesi tarafından ilgili tapu, \
        belediye ve kadastro müdürlüklerine müzekkere yazılmasıdır. Bu \
        kurumlara yazılacak olunan müzekkereler çap, imar durumu ve tapuya \
        ise satış şerhi için olup, bunlar taşınmazın kıymetinin \
        belirlenmesinde önemli rol oynayacaktır. Takip ilamsız ise bu \
        işlem tebliğden 30 gün sonra başlayacaktır.</font></font></font></font></p> \
        <ol start="2"> \
            <li><p> \
            <span style="display: inline-block; border: none; padding: 0in"><font size="3" style="font-size: 12pt"><b><font color="#222222"><font face="Segoe UI, serif"><font face="Times New Roman, serif">Kıymet \
            Takdiri</span></font></font></b></font></font></p> \
        </ol> \
        <p><br/> \
        <br/> \
        </p> \
        <p> \
        <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif">Taşınmaz \
        satış işlemi öncesi gerekli cevapları toplandıktan sonra icra \
        dosyası bilirkişiye teslim edilir. Bilirkişi raporu genellikle 15 \
        gün içerisinde raporlu bir şekilde icra dairesine iade \
        edilmektedir. Bu süre zarfında satışa arz şerhi işlenmiş \
        olunan tapu takyidatının dönüşü de beklenir ve geldiğinde \
        üzerine başkaca alacaklının haczi var mı kontrol edilir. </font></font></font></font> \
        </p> \
        <p> \
        <br/> \
        </p> \
        <ol start="3"> \
            <li><p> \
            <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif"><b>100 \
            Madde</b></font></font></font></font></p> \
        </ol> \
        <p > \
        <br/>         </p> \
        <p> \
        <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif">Başka \
        şerh ya da haciz yok ise rapor gelene kadar beklenilir. Var ise icra \
        dairesi hacizleri için UYAP (Ulusal Yargı Ağı Bilişim Sistemi) \
        üzerinden, kurum şerhleri için ise müzekkere yazılarak kep ya da \
        posta yolu ile ”alacağının devam edip etmediği ediyor ise taraf \
        bilgilerinin iletilmesi’’ yazılı&nbsp;</font></font><span style="display: inline-block; border: none; padding: 0in"><font color="#0000ff"><u><a href="https://icraokulu.com/100-madde-malumati-nedir-iik-md-100-sorulmasi/" target="_blank"><font color="#000000"><font face="Segoe UI, serif"><b>İİK. \
        100 Madde malumatı sorulması</span></b></font></font></a></u></font><font color="#222222"><font face="Segoe UI, serif">&nbsp;gerekir. \
        Gelen cevaplar kıymet takdir raporunun tebliğ edilmesi için \
        kullanılacaktır.</font></font></font></font></p> \
        <h4> \
        <br/> \
        </h4> \
        <ol start="4"> \
            <li><p> \
            <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif"><b>Kıymet \
            Takdiri Tebliği</b></font></font></font></font></p> \
        </ol> \
        <p> \
        <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif">Bilirkişi \
        kıymet takdir raporunu icra dairesine teslim eder. Kıymet takdiri \
        raporu; alacaklıya, borçluya, varsa taşınmaz malikine, varsa 100 \
        madde sorulan diğer alacaklılara, taşınmaz hisseli ise diğer \
        hissedarlara tebliğe çıkartılır. Bu rapor tüm ilgililere tebliğ \
        edilmek zorundadır. Alacaklı, borçlu veya diğer 3. Kişilerin 7 \
        günlük tebliğ süresi içerisinde kıymet takdirine itiraz etme \
        hakkı vardır.</font></font></font></font></p> \
        <p> \
        <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif">Kıymet \
        takdir raporları eksiksiz bir şekilde tebliğ edilen taşınmazın \
        satışı öncesi son bir işlem vardır ki o da ilgili tapu sicil \
        müdürlüğü’ne takyidatlı son tapu kaydının istenmesiyle \
        ilgili müzekkere yazmaktır. Bunun yazılma sebebi sonradan eklenen \
        başka alacaklının haczi var mı yok mu diye emin olmaktır. Cevap \
        geldikten sonra varsa yeni alıcılara kıymet takdir raporu tebliğe \
        çıkartılır. Başka haciz yok ise satış talep edilebilir.</font></font></font></font></p> \
        <ol start="5"> \
            <li><h5><a name="_GoBack"></a> \
            <span style="display: inline-block; border: none; padding: 0in"><font color="#222222"><font face="Segoe UI, serif"><font size="3" style="font-size: 12pt"><b>Satış \
            Talebi</span></font></font></font></b></h5> \
        </ol> \
        <p> \
        <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif">İpotekli \
        veya hacizli olan bu taşınmazın satış talebinin incelenmesi \
        genellikle 3 gün içerisinde olmaktadır. Dosyada eksik yok ise \
        satışına karar verilir. Taşınmaz ilgili icra müdürlüğünün \
        yargı bölgesi içinde ise satış işlemlerine başlar. Yargı \
        bölgesi dışında ise kıymet takdirini yapan talimat dairesine \
        ilgililerle birlikte satış talimatı yazılır. Esas dairesi ya da \
        talimat dairesi satış ilanını hazırlar ve satış defterine en \
        uygun satış tarihini not alır. Satış ilanı öncelikle Basın \
        İlan Kurumu ‘na gönderilerek onların belirlediği bir gazetede \
        yayınlanmasını ister. Bir gün sonra Basın İlan Kurumu ilan \
        bedelini icra dairesine bildirir. Dosya alacaklısı ilan bedelini \
        dosyaya depo eder, icra müdürü parayı Basın İlan Kurumu ‘na \
        gönderir. Dosyada ki tüm ilgililere, Belediye ve Tapu Sicil \
        Müdürlüğü’ ne aynı satış ilanı tebligat yoluyla \
        gönderilir. Tüm ilgililere satış ilanının tebliği zorunludur. \
        İade gelmesi durumunda usulüne göre satıştan önce yeniden \
        çıkartılmalıdır zira satış sonrası&nbsp;</font></font><span style="display: inline-block; border: none; padding: 0in"><font color="#0000ff"><u><a href="https://icraokulu.com/usulsuz-tebligat-nedir-10-usulsuz-tebligat-sekli/" target="_blank"><font color="#000000"><font face="Segoe UI, serif"><b>usulsüz \
        tebligat</span></b></font></font></a></u></font><font color="#222222"><font face="Segoe UI, serif">&nbsp;nedeniyle \
        fesih riski alınmak istenmez.</font></font></font></font></p> \
        <p> \
        <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><font color="#222222"><font face="Segoe UI, serif">Basın \
        İlan Kurumu tarafından kabul edilen ilanın gazetesi 1 hafta sonra \
        icra dairesine gönderilmektedir. İlanının icra dosyasına girmesi \
        sağlanır. Satış günü dosya tekrar incelenir tebligatlar tebliğ \
        olduysa mezat salonunda satış işlemine başlanılır. İhaleye \
        belirtilen oranlarda teminat yatıran herkes katılabilir. Son alıcı \
        imzalarını atar ve yolluk bedelini yatırarak satış sonlanır. \
        Borçlu ve diğer kişilerin 1 hafta içerisinde ihalenin feshi \
        davası açma hakkı vardır. Açılmaz ise kalan bedel ve tellaliye \
        ücreti icra dairesine yatırılarak tescil işlemlerine başlanılır.</font></font></font></font></p> \
        <p><br/> \
        <br/> \
        </p>'),
        // eslint-disable-next-line no-multi-str
        subtext: 'Dosya ilamsız takip ise tebliğden 30 gün sonra \
        ilamlı takip ise icra takibi başlar başlamaz hemen satış \
        işlemlerine başlanılabilir. İlamlı icra takiplerinde ilk \
        yapılması gereken işlem, icra dairesi tarafından ilgili tapu, \
        belediye ve kadastro müdürlüklerine müzekkere yazılmasıdır.',
        writer: 'Kilic | Cetinkaya'
    },
    {
        id: 103,
        title: 'ORTAKLIGIN GIDERILMESI',
        date: '29.01.2021',
        // eslint-disable-next-line no-multi-str
        content: Parser('<p> \
        <font color="#666666"><font face="Arial, serif"><font size="3" style="font-size: 12pt"><b>ORTAKLIĞIN \
        GİDERİLMESİ (İZALE-İ ŞUYU) DAVASI</b></font></font></font></p> \
        <p> \
        <br/> \
        </p> \
        <p> \
        <font color="#666666"><font face="Arial, serif"><font size="3" style="font-size: 12pt">Tapuda \
        birden fazla kişinin hisse sahibi olduğu gayrimenkule paylı \
        mülkiyet ya da hisseli gayrimenkul denir. Paydaşlardan birinin ya \
        da tamamının kendi hissesini ayırmak istemesi durumunda ise \
        ortaklığın giderilmesi davası açılması gerekir. İzale-i şuyu \
        olarak da bilinen ortaklığın giderilmesi davası, tüm paydaşlara \
        sahip oldukları hakları veren bir prosedürdür. Yani davayı tek \
        bir paydaş, diğer hissedarlara karşı açmış olsa bile dava \
        sonucunda hak sahibi olunan hisseler oranında mülkiyet taksimi \
        yapılır.</font></font></font></p> \
        <p> \
        <font color="#333333"><font face="Arial, serif"><font size="3" style="font-size: 12pt"><b>Ortaklığın \
        Giderilmesi Davasının Şartları Nelerdir?</b></font></font></font></p> \
        <p> \
        <font color="#666666"><font face="Arial, serif"><font size="3" style="font-size: 12pt">İzale-i \
        şuyu davasının görülmesi için gayrimenkulün bulunduğu \
        bölgedeki yetkili Sulh Hukuk Mahkemesine başvurulması gerekir. \
        Davayı bir hissedarın açması yeterlidir. Davalı taraf ise diğer \
        hissedarlardır. Paylı mülkiyette hakkı olan herkesin davaya dahil \
        olması gerekir. Hissedarlardan biri vefat ettiği takdirde mirasçı \
        olarak belirtilen kişi davaya dahil olur. Davacı taraf izale-i şuyu \
        davasından feragat edebilir. Ancak feragat etmiş olsa da daha sonra \
        tekrar ortaklığın giderilmesi davası açabilir.</font></font></font></p> \
        <p> \
        <font color="#333333"><font face="Arial, serif"><font size="3" style="font-size: 12pt"><b>Paydaşlığın \
        Giderilmesinde Hangi Yollar İzlenebilir?</b></font></font></font></p> \
        <p> \
        <font color="#666666"><font face="Arial, serif"><font size="3" style="font-size: 12pt">Dava \
        başvurusunun yapılmasının ardından mahkeme tarafından söz \
        konusu gayrimenkulün paylaşılıp paylaşılamama durumunu \
        incelemek üzere bilirkişi atanır. İzale-i şuyu davasında \
        taraflar gayrimenkulü nasıl paylaşacaklarına aralarında karar \
        vererek hakime sunabilirler. Tüm hissedarlar paylaşım konusunda \
        mutabık oldukları takdirde bu yönde karar verilebilir. Nasıl \
        paylaşılacağına dair bir mutabakata varılmadığı zaman ise iki \
        ayrı yöntem izlenebilir: Aynen taksim yani hisselerin \
        paylaştırılması ya da satış yolu ile ortaklığın giderilmesi.</font></font></font></p> \
        <p> \
        <font color="#666666"><font face="Arial, serif"><font size="3" style="font-size: 12pt">Gayrimenkul, \
        hisseler oranında taraflar arasında paylaştırılabilir. \
        Paylaştırılamadığı durumda ise satış yolu ile pay \
        sahiplerinin haklarını almaları sağlanır. Satış, icra dairesi \
        ya da satış memurluğu tarafından gerçekleştirilir. Açık \
        artırma yolu ile yapılan satışa görüş birliği olduğu \
        takdirde sadece hissedarların katılması mümkündür. Satışın \
        gerçekleşmesinin ardından taraflara, sahip olunan pay oranında \
        bedel verilir.</font></font></font></p> \
        <p> \
        <br/>        </p> \
        <p><a name="_GoBack"></a> \
        <font color="#666666"><font face="Arial, serif"><font size="3" style="font-size: 12pt">Ortaklığın \
        giderilmesi davasında sürecin avukat tarafından takip edilmesi \
        önem arzetmektedir. Detaylı bilgi için ofisimize ulaşmanızı \
        rica ederiz.</font></font></font></p> \
        <p><br/> \
        <br/> \
        </p>'),
        // eslint-disable-next-line no-multi-str
        subtext: 'Tapuda \
        birden fazla kişinin hisse sahibi olduğu gayrimenkule paylı \
        mülkiyet ya da hisseli gayrimenkul denir. Paydaşlardan birinin ya \
        da tamamının kendi hissesini ayırmak istemesi durumunda ise \
        ortaklığın giderilmesi davası açılması gerekir.',
        writer: 'Kilic | Cetinkaya'
    },
    {
        id: 104,
        title: 'MTS NEDIR?',
        date: '11.08.2020',
        // eslint-disable-next-line no-multi-str
        content: Parser('<p><a name="_GoBack"></a> \
        <font color="#636363"><font face="Verdana, serif"><font size="4" style="font-size: 15pt">MTS \
        NEDİR?</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">MTS \
        uzun adı Merkezi takip sistemi olan&nbsp; ve 06.12.2018 tarihinde \
        yayınlanmış olan “ABONELİK SÖZLEŞMESİNDEN KAYNAKLANAN PARA \
        ALACAKLARINA İLİŞKİN TAKİBİN BAŞLATILMASI USULÜ HAKKINDA \
        KANUN” ile mevzuatımıza giren bir alacak tahsili yöntemidir.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Kanuna \
        ilişkin yönetmelik de 29.05.2019 tarihinde yayınlanmıştır.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>MTS \
        (Merkezi Takip Sistemi) Nedir ?</b></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Avukatlar \
        tarafından yürütülen abonelik sözleşmelerinden kaynaklanan icra \
        takiplerinin, haciz aşamasına kadar olan işlemlerinin icra \
        dairesine gelinmeden, UYAP ve PTT entegrasyonu ile oluşturulan bir \
        sistem üzerinden sanal ortamda yürütülmesine imkan tanıyan bir \
        takip prosedürüdür.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Genel \
        olarak; faturalardan kaynaklanan(internet, elektrik, su vb.) borçlar, \
        MTS sistemi üzerinden icra takibi olarak başlatılmaktadır.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>Tüketici \
        Aleyhinde Mts İcra Takibi açıldığını nasıl öğrenebilir ?</b></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">a) \
        E-Devlet Sistemi üzerinden, (</font></font></font><a href="https://giris.turkiye.gov.tr/"><font color="#7f7f7f"><font face="Arial, serif"><font size="2" style="font-size: 9pt">https://giris.turkiye.gov.tr/</font></font></font></a><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">)</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">b) \
        Vatandaş Uyap Portal sisteminden, \
        (</font></font></font><a href="https://vatandas.uyap.gov.tr/main/vatandas/giris.jsp"><font color="#7f7f7f"><font face="Arial, serif"><font size="2" style="font-size: 9pt">https://vatandas.uyap.gov.tr/main/vatandas/giris.jsp</font></font></font></a><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">)</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">c) \
        Postane tarafından gönderilmiş olan tebligat (ödeme emri) eline \
        ulaştığı zaman.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Bu \
        aşamada sistem ödeme ihtarına Türkiye genelinde geçerli olacak \
        olan merkezi takip numarası verecektir.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Normalde \
        Uyap sistemi üzerinden açılmış olan diğer takiplerde Antalya \
        İcra Müdürlüğü 2020/*******&nbsp; gibi numara verilirken, Mts \
        takip sistemlerinde Türkiye genelinde geçerli olan takip numarası \
        verilecektir.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>MTS \
        (Merkezi Takip Sistemi) icra takibi kendisine ulaştığında \
        tüketici / borçlu ne yapabilir ?</b></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Bu \
        durumda iki seçenek ortaya çıkmaktadır.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">1) \
        Borçlu Ödeme yapmak isterse, takip masrafları da dahil olmak üzere \
        güncel borç miktarını MTS’den kontrol ederek PTT veya herhangi \
        bir banka (internet) şubesinden MTS numarası ilişkilendirmek \
        suretiyle borcunu yatırabilecektir.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">2) \
        Borçlu böyle bir borcu kabul etmez ise ; itiraz etmek isterse, \
        itiraz dilekçesini herhangi bir icra dairesine sunabileceği gibi \
        (Antalya İcra Müdürlüğü, Burdur İcra Müdürlüğü gibi) Uyap \
        Vatandaş portal üzerinden elektronik imza kullanarak veya kimlik \
        tespiti yapılmak suretiyle herhangi bir PTT şubesine de itiraz \
        edebilecektir.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Bu \
        internet sayfasında yer alan bilgiler, dokümanlardaki eksiklikler \
        ya da hatalar sonrasında bu bilgi ve evraklara dayanılarak \
        yapılacak işlemlerden doğabilecek olan dolayı, doğrudan maddi / \
        manevi zararlar ve masraflardan hiç bir şekilde sorumluluk kabul \
        edilemez. Lütfen ofisimizle iletişime geçerek, randevu alarak, \
        daha sağlıklı bilgiye ulaşın.</font></font></font></p> \
        <p style="line-height: 108%; margin-bottom: 0.11in"><br/> \
        <br/> \
        </p>'),
        // eslint-disable-next-line no-multi-str
        subtext: 'MTS uzun adı Merkezi takip sistemi olan  ve 06.12.2018 tarihinde  \
        yayınlanmış olan “ABONELİK SÖZLEŞMESİNDEN KAYNAKLANAN PARA ALACAKLARINA İLİŞKİN \
        TAKİBİN BAŞLATILMASI USULÜ HAKKINDA KANUN” ile mevzuatımıza giren bir alacak  \
        tahsili yöntemidir..',
        writer: 'Kilic | Cetinkaya'
    },
    {
        id: 105,
        title: 'Icra Takibine NAsil Itiraz Edilir',
        date: '13.10.2020',
        // eslint-disable-next-line no-multi-str
        content: Parser('<p> \
        <font color="#636363"><font face="Verdana, serif"><font size="4" style="font-size: 15pt">Hakkınızda \
        açılmış İCRA takibine nasıl itiraz edersiniz?</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>Hakkınızda \
        açılmış ilamsız İcra Takibine nasıl itiraz edersiniz?</b></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Hakkınızda \
        açılmış olan icra takibine karşı ödeme emrinin tebliğinden \
        itibaren 7 içerisinde icra dairesine gidip itirazda \
        bulunabilirsiniz. Eğer açılan icra takibi yaşadığınız şehirde \
        değilse bulunduğunuz yerleşim yerinde bulunan icra dairesine \
        giderek itirazınızın ilgili icra dairesine gönderilmesini talep \
        edebilirsiniz. Süresi içerisinde itiraz etmediğiniz takdirde takip \
        kesinleşecek ve alacaklının malvarlığınıza haciz koyma hakkı \
        doğacaktır. Bu sebeple taraflara gönderilen icra ödeme emirleri \
        dikkate alınmalı ve haksız bir takip olması durumunda 7 gün \
        içerisinde itiraz edilmelidir.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="3" style="font-size: 12pt"><b>İcra \
        İnkar Tazminatı</b></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">İtiraz \
        ederken dikkat edilecek diğer bir husus ise&nbsp;haksız yere \
        yapılan itirazlarda %20 oranında icra inkar \
        tazminatına&nbsp;hükmedileceğidir. Bu sebeple alacaklı olduğunu \
        iddia eden tarafa ilamsız takipte bahsedilen miktar kadar likit bir \
        borcunuz bulunmakta ise haksız yere yapacağınız itiraz borcunuzu \
        %20 oranında arttıracak ve ek olarak mahkeme masrafları ve \
        yargılama giderleri de tarafınıza yüklenecektir.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="3" style="font-size: 12pt"><b>Gecikmiş \
        İtiraz</b></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">İtirazınızın \
        7 günlük süresini elinizde olmayan ve hastalık, yangın vb.haklı \
        bir sebep ile geçirmiş iseniz&nbsp;gecikmiş itiraz müessesesi&nbsp;ile \
        itirazını yapabilme hakkınız bulunmaktadır.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Gecikmiş \
        itiraz yoluna engelin kalkmasından itibaren üç gün içinde ve \
        paraya çevirme işlemi bitinceye kadar başvurabilirsiniz.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Süresinde \
        itiraz edememeniz halinde hakkınızı genel yetkili mahkemelerde \
        açılan menfi tespit davası ile ileri sürebilirsiniz.</font></font></font></p> \
        <p> \
        <font color="#636363">&nbsp;</font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>Hakkınızda \
        haksız takip açılması durumunda tazminat hakkınız var mıdır?</b></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Haksız \
        icra takibi yapıldığı takdirde haksız takibin borçlusu itiraz \
        sürelerini kaçırmadan sebeplerini de belirterek İcra İflas \
        Kanununa uygun olan itiraz dilekçesiyle borca itiraz etmelidir. \
        İtiraz takibinde dava açma yükü alacaklıdadır. Ancak bu \
        aşamadan sonra takibe devam edilebilmesi dava ile yapılan itirazın \
        kaldırılması ya da iptaline karar verilmesi gerekir.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Haksız \
        icra takibine uğrayan alacaklı kendisine dava açılmasını \
        beklemeden alacaklının haksız icra takibi yaptığı gerekçesiyle \
        zararlarını tazmin ettirmek için alacaklıya karşı maddi ve \
        manevi tazminat davası açabilir. Bu tazminat davası genel \
        mahkemelerde açılır. İcra takibinin haksız olarak açıldığının \
        ve zararların ispatı gerekmektedir.&nbsp;</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>ANTALYA \
        GENEL İCRA MÜDÜRLÜĞÜNE</b></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>DOSYA \
        NO :</b></font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">&nbsp;2020/******** \
        Esas</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>İTİRAZ \
        EDEN (BORÇLU) :</b></font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">&nbsp;********** \
        Tc: *******<br/> \
        ADRES:*******</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>VEKİLLERİ \
        :</b></font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">&nbsp;Av.Abdulkadir \
        ÇETİNKAYA&amp;Av. Kubilay Yasin Kılıç<br/> \
        </font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><i>Konusever \
        mah. Kızılırmak cad. H.Çoban İş Merk. No:135B/B \
        Muratpaşa/ANTALYA</i></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>ALACAKLI \
        :</b></font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">&nbsp;***********</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>VEKİLLERİ \
        :</b></font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">&nbsp;******</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>KONU \
        :</b></font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">&nbsp;Tarafımıza \
        **/**/**** tarihinde tebliğ edilen ödeme emrine ilişkin \
        itirazlarımızı içerir.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>AÇIKLAMALAR</b></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Mezkur \
        sayılı dosyaya istinaden ödeme emri tarafımıza 30/12/2019 \
        tarihinde tebliğ edilmiştir. Süresi içerisinde itiraz etmekteyiz.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Alacaklı \
        görünen tarafından müvekkil aleyhine açılan takipteki BORCA \
        İTİRAZ EDİYORUZ. Alacaklı görünene müvekkilimizin böyle bir \
        borcu yoktur. Dolayısıyla bu bedel haksızdır.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Müvekkil \
        aleyhine başlatılan icra takibinde müvekkilin borçlu olduğu \
        herhangi bir rakam bulunmamaktadır. Bu sebeple borca, faize ve her \
        türlü fer’ilerine AÇIKÇA İTİRAZ EDİYORUZ.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">İcra \
        takibi yetkili icra dairesinde açılmamıştır. Müvekkilin adresi \
        yukarıda da görüldüğü üzere Burdur ili Merkez ilçesi \
        sınırlarındadır. İcra takibi Burdur İcra Dairelerinde açılması \
        gerekirken Samsun’da açılmıştır. Bu sebeple yetkiye de itiraz \
        ediyoruz. Dosyanın yetkili İcra dairesi olan Burdur icra \
        dairelerine gönderilmesini talep ediyoruz.</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Her \
        ne kadar tebligat zarfında ödeme emri ve dayanak belge sureti \
        ektedir denilse de gönderilen ödeme emri ekinde dayanak belgeler \
        eksiktir, takibe bu yönüyle itiraz ediyoruz.<br/> \
        <br/> \
        </font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><b>SONUÇ \
        ve İSTEM:</b></font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">&nbsp;Açıklanan \
        nedenlerle müvekkile **/**/**** tarihinde tebliğ edilen ödeme \
        emrine yasal süresi içinde itiraz ediyoruz. Öncelikle Yetkili İcra \
        Daireleri ********* İCRA DAİRELERİ olduğundan yetkisiz icrada \
        açılan icra dosyasına YETKİ HUSUSUNDA İTİRAZ EDİYORUZ. \
        Müvekkilden talep edilen alacak gerçek ve mevcut bir alacak \
        olmadığından ve müvekkilimize herhangi bir borç bildiriminde \
        bulunulmadığından talep edilen esas alacak, faiz, her türlü \
        fer’ileri ve tüm harç ve sairlerine de itiraz ediyoruz. \
        Müvekkilimizin alacaklı görünene hiçbir borcu yoktur. BORCUN \
        TAMAMINA, FAİZE, YETKİYE, FAİZ ORANINA ve HER TÜRLÜ FER’İLERİNE \
        açıkça itiraz ettiğimizi bildirir takibin itirazımız \
        neticesinde takibin DURDURULMASINI arz ve talep ederiz.**/**/****</font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><i>İtiraz \
        Eden(Borçlu) Vekileri</i></font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><br/> \
        </font></font></font><font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt"><i>Av.Abdulkadir \
        ÇETİNKAYA&amp;Av.Kubilay Yasin KILIÇ</i></font></font></font></p> \
        <p> \
        <font color="#636363"><font face="Arial, serif"><font size="2" style="font-size: 9pt">Bu \
        internet sayfasında yer alan bilgiler, dokümanlardaki eksiklikler \
        ya da hatalar sonrasında bu bilgi ve evraklara dayanılarak \
        yapılacak işlemlerden doğabilecek olan dolayı, doğrudan maddi / \
        manevi zararlar ve masraflardan hiç bir şekilde sorumluluk kabul \
        edilemez. Lütfen ofisimizle iletişime geçerek, randevu alarak, \
        daha sağlıklı bilgiye ulaşın.</font></font></font></p> \
        <p></a> \
        <br/> \
        <br/> \
        </p>'),
        // eslint-disable-next-line no-multi-str
        subtext: 'Hakkınızda \
        açılmış olan icra takibine karşı ödeme emrinin tebliğinden \
        itibaren 7 içerisinde icra dairesine gidip itirazda \
        bulunabilirsiniz. Eğer açılan icra takibi yaşadığınız şehirde \
        değilse bulunduğunuz yerleşim yerinde bulunan icra dairesine \
        giderek itirazınızın ilgili icra dairesine gönderilmesini talep \
        edebilirsiniz.',
        writer: 'Kilic | Cetinkaya'
    },
    {
        id: 106,
        title: 'Anlasmali Bosanma',
        date: '08.11.2021',
        // eslint-disable-next-line no-multi-str
        content: Parser('<p><a name="_GoBack"></a> \
        <font color="#000000"><font face="Helvetica, serif"><font size="5" style="font-size: 18pt"><b>Anlaşmalı \
        Boşanma Davası</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt"><b>Anlaşmalı \
        boşanma davası</b></font></font></font><font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt">, \
        en az 1 yıl süren evliliklerde, eşlerin birlikte başvurması ya \
        da bir eşin diğerinin açtığı davayı kabul etmesi hâlinde söz \
        konusu olur. Kanun, bu hallerde evlilik birliğinin temelinden \
        sarsıldığı, taraflar da boşanmada anlaşmışsa evliliğin \
        sürdürülmesinin manasız olduğu kabul edilir. Bu hâlde boşanma \
        kararı verilebilmesi için, hâkimin tarafları bizzat dinleyerek \
        iradelerinin serbestçe açıklandığına kanaat getirmesi ve \
        boşanmanın malî sonuçları ile çocukların durumu hususunda \
        taraflarca kabul edilecek düzenlemeyi uygun bulması şarttır. \
        Hâkim, tarafların ve çocukların menfaatlerini göz önünde \
        tutarak bu anlaşmada gerekli gördüğü değişiklikleri yapabilir. \
        Bu değişikliklerin taraflarca da kabulü hâlinde boşanmaya \
        hükmolunur. Bu hâlde tarafların ikrarlarının hâkimi \
        bağlamayacağı hükmü uygulanmaz (TMK 166/3).</font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt">Anlaşmalı \
        boşanma davası açılabilmesi için Medeni Kanun’un aradığı \
        şartlar şunlardır:</font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt"><b>1. \
        Evlilik ilişkisi en az 1 yıl sürmelidir.</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt">Anlaşmalı \
        boşanma davası açılabilmesi için evlilik ilişkisinin en az 1 \
        yıl sürmesi gerekir. Evlilik ilişkisinden kasıt, taraflar \
        arasında yapılan resmi nikahtan itibaren en az bir yıllık bir \
        sürenin geçmiş olmasıdır. Taraflar arasında imam nikahı, \
        nişanlılık ya da birlikte yaşama gibi hallerde geçen süre 1 \
        yıllık süreye dahil edilemez.</font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt"><b>2. \
        Eşlerin mahkemeye beraber başvurmalı ya da bir eşin açtığı \
        boşanma davasını diğer eş kabul etmelidir.</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt">Taraflar \
        ortak bir dilekçe ile başvurmaları sonucu anlaşmalı boşanma \
        gerçekleşebileceği gibi eşlerden birinin usulüne uygun olarak \
        açmış olduğu boşanma davasındaki tüm talepleri diğer tarafın \
        kabul etmesi ile de anlaşmalı boşanma gerçekleşebilir. Ayrıca \
        boşanma davası çekişmeli olarak açılmış ve devam etmekte iken \
        tarafların anlaşmalı boşanma iradelerini açıklayan protokolü \
        mahkemeye sunmaları ya da duruşma esnasında anlaşma şartlarını \
        duruşma zaptına geçirmeleri ile de anlaşmalı boşanma \
        gerçekleşebilir.</font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt"><b>3. \
        Taraflar hakim huzurunda boşanma iradelerini açıklamalıdır.</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt">Kanun, \
        tarafların iradelerini hakim huzurunda özgürce açıklayabilmeleri \
        için anlaşmalı boşanma için bu şartı getirmiştir. Hakim \
        tarafların iradelerinin herhangi bir nedenle fesada uğradığını \
        tespit ederse boşanma talebini ret edecektir. Tarafların boşanma \
        iradelerini hakim huzurunda bizzat açıklamaları gerekmektedir. \
        Boşanma, kişiye sıkı sıkıya bağlı haklardan olduğu için \
        boşanma avukatının tarafların yerine geçerek boşanma iradesini \
        açıklaması mümkün değildir.</font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt"><b>4. \
        Hakim, boşanmanın mali sonuçları ile çocukların durumu ile \
        ilgili düzenlemeyi uygun bulmalıdır.</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt">Tarafların, \
        hakime sunmuş oldukları anlaşma şartlarındaki maddi-manevi \
        tazminat, nafaka (İştirak ve yoksulluk nafaksı), çocukların \
        velayeti, çocuklar ile kişisel münasebet gibi hususların hakim \
        tarafından uygun bulunması gerekir. Hakim gerek görürse bu \
        şartlarda değişikliğe gidebilir. Ancak hakimin yapmış olduğu \
        bu değişiklikler taraflarca kabul edilmesi durumunda anlaşmalı \
        boşanma gerçekleşebilir. Aksi durumda dava çekişmeli boşanma \
        davasına döner. Ancak uygulamada hakimler genelde tarafların \
        anlaşma sağladıkları şartları kabul ettiklerinden bu durum ile \
        pek karşılaşılmaz.</font></font></font></p> \
        <p> \
        <br/> \
        <br/> \
        </p> \
        <p> \
        <font color="#000000"><font face="Helvetica, serif"><font size="4" style="font-size: 13pt">Anlaşmalı \
        boşanma davası için bir avukata danışmanız süreci daha \
        sağlıklı hale getirecektir.</font></font></font></p> \
        <p> \
        <br/> \
        <br/> \
        </p> \
        <p style="line-height: 108%; margin-bottom: 0.11in"><br/> \
        <br/> \
        </p>'),
        // eslint-disable-next-line no-multi-str
        subtext: 'En az 1 yıl süren evliliklerde, eşlerin birlikte başvurması ya \
        da bir eşin diğerinin açtığı davayı kabul etmesi hâlinde söz \
        konusu olur. Kanun, bu hallerde evlilik birliğinin temelinden \
        sarsıldığı, taraflar da boşanmada anlaşmışsa evliliğin \
        sürdürülmesinin manasız olduğu kabul edilir.',
        writer: 'Kilic | Cetinkaya'
    },
    {
        id: 107,
        title: 'Cekismeli Bosanma',
        date: '05.12.2021',
        // eslint-disable-next-line no-multi-str
        content: Parser('<p> \
                <font color="#1d1d1d"><font face="Arial, serif"><font size="5" style="font-size: 18pt"><b>Çekişmeli \
        Boşanma Davası</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>Çekişmeli \
        boşanma&nbsp;davası </b></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">şu \
        hallerde olacaktır:</font></font></font></p> \
        <ul> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Evliliğin \
            bitmesini isteyen ve bu sebeple boşanmak isteyen bir eş varken \
            diğer eş buna yanaşmamaktadır,</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Evliliğin \
            bitmesini ve boşanmayı her iki eşte istiyordur ancak evliliğin \
            sona ermesi ile doğacak hukuki durumlar konusunda bir anlaşmaya \
            varamamışlardır. Örnek verecek olursak, Nafaka miktarında \
            anlaşamamak, çocukların velayeti konusunda anlaşamamak, tazminat \
            hususunda anlaşamamak gibi,</font></font></font></p> \
        </ul> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Bu \
        iki sebebin neticesinde meydana gelen boşanma davasına \
        ise&nbsp;</font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><i>çekişmeli \
        boşanma davası</i></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;denmektedir. \
        Eğer böyle bir durumda iseniz alanında uzman bir&nbsp;</font></font></font><a href="https://www.hukukidurum.com/"><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><u>Ankara \
        boşanma avukatı</u></font></font></font></a><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">ndan \
        yardım almanızı tavsiye ederiz.</font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Yukarıdaki \
        paragrafta belirtilen sebeplerden bağımsız olarak kanun koyucu, \
        genel&nbsp;</font></font></font><a href="https://www.hukukidurum.com/bosanma-sebepleri-nelerdir/"><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><u>boşanma \
        sebepleri</u></font></font></font></a><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;olarak \
        birtakım hususları düzenleme altına alma gereği \
        görmüştür.&nbsp;</font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><i>Çekişmeli \
        boşanma</i></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;davası \
        açmak isteyen taraflar, boşanma iddialarını bu sebeplerin \
        varlığına dayandırmak durumundadır. Bunlar;</font></font></font></p> \
        <ul> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Zina \
            (Türk Medeni Kanunu madde 161),</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Hayata \
            kast ve kötü davranış (Türk Medeni Kanunu madde 162),</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Suçlu \
            olmak ve haysiyetsiz yaşam sürmek (Türk Medeni Kanunu madde 163),</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Terk \
            (Türk Medeni Kanunu madde 164),</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Akıl \
            sağlığının yerinde olmaması (Türk Medeni Kanunu madde 165)</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Evlilik \
            birliğinin temelden sarsılması (Türk Medeni Kanunu madde \
            166)’dir.</font></font></font></p> \
        </ul> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>Çekişmeli \
        boşanma davaları</b></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;uygulamada, \
        yukarıda sayılan sebepler arasından “evlilik birliğinin \
        sarsılması” nedeniyle çok sık karşımıza çıkmaktadır. Bu \
        sebebe biraz değinmek gerekirse; Türk Medeni Kanunu madde 166 \
        uyarınca düzenleme altına alınmıştır. Gerekçesi ise mevcut \
        olan evliliğin ve o ana dek devam eden ortak hayatı devam \
        ettirmenin artık taraflardan beklenemeyecek boyutta çekilmez bir \
        hal alması durumunda eşlerden birisi boşanma davası \
        açabilecektir. Davayı açan eşin, mevcut kusuru diğerine oranla \
        daha ağır ise davalının itiraz hakkı bulunmaktadır.&nbsp;</font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><i>Çekişmeli \
        boşanma davası</i></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;da \
        bu durumda tezahür etmektedir. Ancak şunu da belirtmek gerekir ki \
        yapılan itiraz, niteliği itibari ile hakkın kötüye kullanılması \
        şeklinde ise ve evliliğin devam etmesi davalı ve varsa çocuklar \
        için bir yarar sağlamayacaksa hakim, itirazı dikkate almadan \
        boşanma kararı verebilecektir.</font></font></font></p> \
        <p> \
        <font color="#1d1d1d"><font face="Arial, serif"><font size="5" style="font-size: 18pt"><b>Çekişmeli \
        Boşanma Davası Ne Kadar Sürer?</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>Çekişmeli \
        boşanma</b></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;davası \
        birçok hususu barındırmaktadır. Bu barındırılan hususlar da \
        davanın süresine doğrudan etki etmektedirler. Buna göre;</font></font></font></p> \
        <ul> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Tarafların \
            haklı olup olmamaları,</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Karşı \
            tarafın kusurluluğunun ortaya konulup konulmaması,</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">İddiaların \
            ispat edilmesi,</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Delillerin \
            toplanarak mahkemeye sunulması ve mahkemenin değerlendirmede \
            bulunması,</font></font></font></p> \
        </ul> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Ve \
        bunlara benzer birçok etken boşanma davası süresinin \
        belirlenmesinde etkili olmaktadır. Ancak söylemek gerekir ki \
        davalar, ortalama 1 yıl ile 3 yıl arasında sürmektedir. Ancak \
        tavsiyemizi yinelemek isteriz ki uzman bir boşanma avukatından \
        yardım almanız, bu&nbsp;</font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><i>çekişmeli \
        boşanma davası</i></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;sürecinde \
        hak kayıplarına maruz kalmamanız adına önemli bir etkendir.</font></font></font></p> \
        <p> \
        <font color="#1d1d1d"><font face="Arial, serif"><font size="5" style="font-size: 18pt"><b>Çekişmeli \
        Boşanma Davasına Tarafların Katılması Gerekir mi?</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>Çekişmeli \
        boşanma davası</b></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;açan \
        eşin, bir avukatı yoksa kendisi bizzat duruşmada hazır bulunmak \
        zorundadır. Eğer duruşmaya katılmazsa dosyası, 3 ay içerisinde \
        yenileninceye kadar mahkeme tarafından işlemden kaldırılacaktır. \
        Fakat davacı, kendisini temsil etmesi açısından bir boşanma \
        avukatına vekalet verebilir. Bu durumda ise duruşmalara bizzat \
        katılmasına gerek kalmayacaktır. Boşanma avukatı, davacı yerine \
        duruşmaya katılır ve davayı onun yerine takip edebilir. Bu \
        bakımdan boşanma avukatından yardım almak önemli bir role \
        sahiptir.</font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>Çekişmeli \
        boşanma davası</b></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">nda \
        davalı konumundaki eşin ise davacıdan farklı olarak duruşmaya \
        katılması gereklilik arz etmemektedir. Dava, davalının yokluğunda \
        da devam edecektir. Fakat belirtmek gerekir ki duruşmalara \
        katılmayan davalı, itiraz etme hakkından da feragat etmiş \
        sayılacaktır. Bu nedenle davalının gerek bizzat kendisi gerekse \
        vekalet verdiği boşanma avukatı aracılığı ile duruşmalara \
        katılması, itiraz hakkı ve diğer nedenler açısından önemlidir.</font></font></font></p> \
        <p> \
        <font color="#1d1d1d"><font face="Arial, serif"><font size="5" style="font-size: 18pt"><b>Ayrılık \
        Davası Nedir?</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>Çekişmeli \
        boşanma davası</b></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;ya \
        da&nbsp;</font></font></font><a href="https://www.hukukidurum.com/anlasmali-bosanma-protokolu-ve-dilekcesi/"><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><u>anlaşmalı \
        boşanma</u></font></font></font></a><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;davasından \
        önce boşanma davası şartlarını taşıyan ve dava açmaya \
        yetkisi bulunan taraf, bu davalardan önce ayrılık talep \
        edebilecektir. Boşanma sebebinin ispatlanıp ispatlanmadığına \
        bakılarak hakim tarafından boşanma veya ayrılığa \
        hükmedilecektir. Ancak taleple bağlılık ilkesi gereği hakim, \
        ayrılık talebi karşısında boşanmaya hükmedemeyecektir. Açılan \
        davada talep edilen boşanma ise hakim, ortak hayatın yeniden \
        kurulabilmesinin mümkün olduğuna kanaat getirirse ayrılığa \
        karar verebilecektir. Hakim tarafından ayrılık için verilen süre \
        1yıl ila 3 yıl arasındadır. Hakim vereceği sürenin başlayacağı \
        tarih, ayrılık hükmünün kesinleştiği andır. Hakim tarafından \
        verilen sürenin dolması ile beraber ayrılıkta sona erecektir. \
        Ortak hayat bu süre içerisinde tekrar kurulmadıysa da \
        artık&nbsp;</font></font></font><a href="https://www.hukukidurum.com/bosanma-davasi-acma/"><font color="#cf2e2e"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><u>boşanma \
        davası açma</u></font></font></font></a><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;mümkün \
        olacaktır. Hakim bu durumda tekrar ayrılık kararı veremez.</font></font></font></p> \
        <p> \
        <font color="#1d1d1d"><font face="Arial, serif"><font size="5" style="font-size: 18pt"><b>Boşanma \
        ve Ayrılık Davası Devam Ederken Nafakaya Karar Verilebilir Mi?</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>Çekişmeli \
        boşanma</b></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;davası, \
        anlaşmalı boşanma davası ve ayrılık davasında taraflar; dava \
        haklarının güvence altına alınması amacıyla kanunda belirtilen \
        birtakım&nbsp;</font></font></font><a href="https://www.hukukidurum.com/ihtiyati-tedbir/"><font color="#cf2e2e"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><u>ihtiyati \
        tedbir</u></font></font></font></a><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">leri \
        talep edebileceklerdir. Bu tedbirlere kısaca göz atacak olursak;</font></font></font></p> \
        <ul> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Nafaka,</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Çocukların \
            velayeti,</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Çocuklara \
            yönelik bakıma katılınması,</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Ortak \
            konuttan ayrılan eşin barınması,</font></font></font></p> \
            <li><p> \
            <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Ortak \
            malların yönetimi,</font></font></font></p> \
        </ul> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Ve \
        benzeri hususlar geçici tedbir kapsamındadır.</font></font></font></p> \
        <p> \
        <font color="#1d1d1d"><font face="Arial, serif"><font size="5" style="font-size: 18pt"><b>Çekişmeli \
        ve Anlaşmalı Boşanma ile Ayrılık Davaları Hangi Mahkemede \
        Açılır?</b></font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>Çekişmeli \
        boşanma</b></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;davası, \
        anlaşmalı boşanma davası ve ayrılık davasına bakmaya yetkili \
        mahkeme ilgili kanun gereğince;&nbsp;boşanma davasını açan \
        tarafın ya da davalı tarafın yerleşim yeri veya boşanma davası \
        açılmadan 6 ay önce birlikte ikamet ettikleri yer mahkemesidir. \
        Görevli mahkeme ise TMK uyarınca Aile Mahkemeleridir. Eğer ki \
        yetki sınırları içerisinde aile mahkemesi bulunmuyorsa bu sefer, \
        Aile Mahkemesi sıfatı ile Asliye Hukuk Mahkemesi boşanma davasına \
        bakabilecektir. Anlaşmalı boşanma davalarında ise özel bir durum \
        bulunmaktadır. Buna göre, anlaşan tarafların mahkemenin yetkisine \
        dair bir itirazda bulunmaları muhtemel olmayacağı için anlaşmalı \
        boşanma davaları, herhangi bir adliyede bulunan Aile Mahkemelerinde \
        eğer yoksa Aile Mahkemesi sıfatı ile Asliye Hukuk Mahkemesinde \
        davayı açabileceklerdir.</font></font></font></p> \
        <p> \
        <font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">Boşanma \
        davalarında, yurt dışındaki vatandaşlar açısından ise yine \
        özel bir durum bulunmaktadır. Buna göre yurt dışında yaşayan \
        ve anlaşmalı ya da çekişmeli fark etmeksizin; boşanmaya karar \
        veren vatandaşlar, yurtdışında boşanma davası açamayacaklardır. \
        Yetkili mahkemenin belirlenmesi hususunda ise&nbsp;</font></font></font><a href="https://www.resmigazete.gov.tr/eskiler/2007/12/20071212-1.htm" target="_blank"><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><u>5718 \
        sayılı Kanun Madde 41</u></font></font></font></a><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">&nbsp;esas \
        alınacaktır.</font></font></font></p> \
        <p style="line-height: 108%; margin-bottom: 0.11in"><a name="_GoBack"></a> \
        <br/> \
        <br/> \
        </p>'),
        // eslint-disable-next-line no-multi-str
        subtext: 'Evliliğin \
        bitmesini ve boşanmayı her iki eşte istiyordur ancak evliliğin \
        sona ermesi ile doğacak hukuki durumlar konusunda bir anlaşmaya \
        varamamışlardır. Örnek verecek olursak, Nafaka miktarında \
        anlaşamamak, çocukların velayeti konusunda anlaşamamak, tazminat \
        hususunda anlaşamamak gibi',
        writer: 'Kilic | Cetinkaya'
    }

]

export default articles;
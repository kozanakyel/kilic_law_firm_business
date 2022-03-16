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
    }

]

export default articles;
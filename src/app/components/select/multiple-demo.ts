import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from '../../../ng-multiselect-dropdown/src';

@Component({
  selector: 'multiple-demo',
  templateUrl: './multiple-demo.html'
})
export class MultipleDemoComponent implements OnInit {
  myForm: FormGroup;
  disabled = false;
  ShowFilter = true;
  showAll = false;
  limitSelection = false;
  limitShow = false;
  disableBangalore = false;
  products: Array<{ code: string, name: string }> = [];
  selectedItems: Array<any> = [];
  dropdownSettings: IDropdownSettings = {};
  smartSearch = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.products = [
      {
        "code": "3PEARBASEBLSL2",
        "name": "Frozen Pork Ear Base Bulk Poly"
      },
      {
        "code": "3CBRWODYBLSL2",
        "name": "Frozen Chicken Woody Breast Boneless Skinless Full Butterfly Bulk Poly"
      },
      {
        "code": "3VFF38932STCUTSO11",
        "name": "Frozen French Fries 3/8 x 9/32 Straight Cut Skin On  Coated 6 bags x 6 lbs Paper Bags"
      },
      {
        "code": "3BCHGRO8119BLSL1",
        "name": "Frozen Beef  Ground Chuck 81/19 Chops 10 Lbs"
      },
      {
        "code": "3PLO1416BIBL3",
        "name": "Frozen Pork Loin 14 - 16lb  B/I  Bulk"
      },
      {
        "code": "3CBRTRD45FCBLSL2",
        "name": "Frozen Chicken Tenders Breaded Fully Cooked 4/5 lbs Poly"
      },
      {
        "code": "3BSHORIBCHOBISO1",
        "name": "Frozen Beef Short Rib Choice Bone In CV"
      },
      {
        "code": "1POFJSLABLSO0",
        "name": "Fresh Pork Jowl Skin On Slashed Combo"
      },
      {
        "code": "2BLSLOINHICHBLSL1",
        "name": "Fresh Beef Striploin 0x1 High Choice Angus B/L CV"
      },
      {
        "code": "3PCCROPI150BISO2",
        "name": "Frozen Pork Roaster Pig #1 120-150 Lb Bulk Poly"
      },
      {
        "code": "3PLOSHOCUTBISL1",
        "name": "Frozen Pork Loin Shortcut Bone In CV"
      },
      {
        "code": "3VFFFF3800SL11",
        "name": "Frozen French Fries 3/8 x 3/8 skinless  6 bags x 6 lbs Regular Cut Coaded"
      },
      {
        "code": "2BSIRFLMANBLSO1",
        "name": "Fresh Beef Black Angus Loin Sirloin Flap Meat CV"
      },
      {
        "code": "3CFRNK28U340GRBLSL7",
        "name": "Frozen Chicken Franks 28 / 340gr. Retail Package"
      },
      {
        "code": "3BLOTPBTXTBLSL1",
        "name": "Frozen Beef Top Butt XT Angus Hi Cho Boneless CV"
      },
      {
        "code": "2TWGBISO12140",
        "name": "Fresh Turkey WOG in Combo 12-14 Lbs - Grade A"
      },
      {
        "code": "3CBR05TRBLSL5",
        "name": "Frozen Chicken Breast Trim 5% down Wax Box"
      },
      {
        "code": "3PHA00002327BISO5",
        "name": "Frozen Pork Ham Bone In Skin On 23-27 Lbs CVP"
      },
      {
        "code": "2BRDKNUCBLSL1",
        "name": "Fresh Beef Peeled Knuckle Bnls  CV"
      },
      {
        "code": "3CJUMTMBLSL6",
        "name": "Frozen Chicken Jumbo Thigh Boneless Skinless 4/10 Lbs. Poly"
      },
      {
        "code": "1PCC72TRBLSL0",
        "name": "Fresh Pork Trim 72% Combo"
      },
      {
        "code": "3PLO1014BISL3",
        "name": "Frozen Pork Loin 10 - 14lb  B/I IWP"
      },
      {
        "code": "3PRIBACKBISL1BBQ",
        "name": "Frozen Pork Back Ribs BBQ CV"
      },
      {
        "code": "2BSIRCULHICHBLSL1",
        "name": "Fresh Beef Sirloin Coulotte High Choice Angus B/L CV"
      },
      {
        "code": "3CBRMEDFL40LBBLSL6",
        "name": "Frozen Chicken Medium Breast Fillets Boneless skinless  40lbs Bulk"
      },
      {
        "code": "2PLO22DNBISL2",
        "name": "Fresh Pork Loin 22lb DN B/I Bulk"
      },
      {
        "code": "3PCCSKMXBLSO5",
        "name": "Frozen Pork Mixed Skins Wax"
      },
      {
        "code": "1PHASHANBISL0",
        "name": "Fresh Pork Bone In Shank Combo"
      },
      {
        "code": "3BOFTOTRBLSL2",
        "name": "Frozen Beef Tongue Trimming Bulk/Poly"
      },
      {
        "code": "2BLOTPBTBLSL1",
        "name": "Fresh Beef Top Butt Angus Hi Cho Bnls  CV"
      },
      {
        "code": "3PLO21DNBISL3",
        "name": "Frozen Pork Loin 21lb DN B/I IWP"
      },
      {
        "code": "3PLOI216BISL3",
        "name": "Frozen Pork Loin 12 - 16lb  B/I  IWP"
      },
      {
        "code": "3PLO72TRBLSL2",
        "name": "Frozen Pork Loin Trim 72% Bulk/Poly"
      },
      {
        "code": "3BOBACRTBISO2",
        "name": "Frozen Beef Backribs  Bulk/Poly"
      },
      {
        "code": "2BSHORIBCHOBISO1",
        "name": "Fresh Beef Short Rib Choice Bone In CV"
      },
      {
        "code": "3CBRJTTFBLSK6",
        "name": "Frozen Chicken Breast Jumbo Bonless Skinless Full Butterfly 4/10 lbs Sealed Bag"
      },
      {
        "code": "3PHDJWINBISO3",
        "name": "Frozen Pork Head Jowl in IWP"
      },
      {
        "code": "3CBRSPLTBISO2",
        "name": "Frozen Chicken B/I Split Breast Bulk"
      },
      {
        "code": "3CHIPATFCBLSL2",
        "name": "Frozen Chicken Patties Breaded Fully Cooked 20 lbs bulk poly"
      },
      {
        "code": "3PHAOTERINNERBLSL2",
        "name": "Frozen Pork Outer Shank /Inner Shank Bulk/Poly"
      },
      {
        "code": "3CLGDRMBBISO2",
        "name": "Frozen Chicken Broken Drumsticks 40Lb Bulk Poly"
      },
      {
        "code": "2BCHCKSRIHICHBISL1",
        "name": "Fresh Beef Chuck Short Rib High Choice Angus B/I CV"
      },
      {
        "code": "1PSHCUSHBLSL0",
        "name": "Fresh Pork Cushion Meat B/L Combo"
      },
      {
        "code": "3TWG1820ASO2",
        "name": "Frozen Turkey Whole  Grade A, basted  18-20 Lb each"
      },
      {
        "code": "1BCHSCXTBLSL4NR",
        "name": "Fresh Beef No Roll Chuck Shoulder Clod XT Bnls CV"
      },
      {
        "code": "1BRB2IBLSL4NRBA",
        "name": "Fresh Beef No Roll Ribeye 2x2 BI CV"
      },
      {
        "code": "3BLOLOSLANBLSL1",
        "name": "Frozen Beef Black Angus Loin Striploin Bnls CV"
      },
      {
        "code": "1PBERIBBISO0",
        "name": "Fresh Pork Belly Rib In Skin on Combo"
      },
      {
        "code": "3VFFFFSEL3865SL11",
        "name": "Frozen French Fries Select 3/8 Straight Cut 6 bags x 5 lbs Clear Poly Bag"
      },
      {
        "code": "3CBRDDBLSL4",
        "name": "Frozen Chicken Breast Boneless Skinless CV 1 Kg - Delicias del Dia"
      },
      {
        "code": "3CBRBRDRTCBLSL11",
        "name": "Frozen Chicken Breaded Breast Fillets RTC 4/5 lbs poly"
      },
      {
        "code": "1PLO0ENDBISL0",
        "name": "Fresh Pork Sirloin Bone In Combos"
      },
      {
        "code": "3BRDINSKBLSCHCV1",
        "name": "Frozen Beef Inside Skirt Boneless CV Choice"
      },
      {
        "code": "3CBRTEFLCOSPHBLSL10L2",
        "name": "Frozen Chicken Breaded Breast Hot and Spicy Tender Fully Cooked  10 Lbs. Bulk"
      },
      {
        "code": "3POFTAILPCSBISL2",
        "name": "Frozen Pork Tail Pieces Bulk Poly"
      },
      {
        "code": "3PCCROPI89BISO2",
        "name": "Frozen Pork Roaster Pig #1 80-89 Lb Bulk Poly"
      },
      {
        "code": "3CBRFLBLSL9",
        "name": "Frozen Chicken Breast Fillets Boneless skinless  Layer Pack"
      },
      {
        "code": "3TLGDRMSKISO2",
        "name": "Frozen Turkey Smoked Drums (tom)  33 oz"
      },
      {
        "code": "3COFHARTBLSL5",
        "name": "Frozen Chicken Hearts Wax Box No Liner"
      },
      {
        "code": "3PSHCUSHBLSL1",
        "name": "Frozen Pork Cushion Meat B/L CV"
      },
      {
        "code": "3BCC70TRBLSL2",
        "name": "Frozen Beef  Trim 70/30 Bulk/Poly"
      },
      {
        "code": "3CBRSPLTBLSO2",
        "name": "Frozen Chicken B/L Split Breast Bulk"
      },
      {
        "code": "1PRISPRIBCDL0",
        "name": "Fresh Pork Spareribs Medium Combo"
      },
      {
        "code": "3BOFTONGBLSL1",
        "name": "Frozen Beef Tongues CV"
      },
      {
        "code": "2CBRFLMEDBLSL410",
        "name": "Fresh Chicken Medium Breast Fillets  Boneless skinless  4/10 lbs"
      },
      {
        "code": "2BINRDBLSLXTSEL1",
        "name": "Fresh Beef Inside Round XT Select CV 1 Pc/Bag"
      },
      {
        "code": "3BOFSPLEEBLSL3",
        "name": "Pajarilla (Bazo) de Res Congelado IWP"
      },
      {
        "code": "3BLOTAILBLSL1NR",
        "name": "Frozen Beef No Roll Black Angus Loin Tail CV"
      },
      {
        "code": "1PLO22DNBISL0",
        "name": "Fresh Pork Loin 22lb DN B/I Combo"
      },
      {
        "code": "3PCC72TRBLSL2",
        "name": "Frozen Pork Trim 72% Froz Bulk/Poly"
      },
      {
        "code": "3PBESEPCBLSL2",
        "name": "Frozen Pork Smoked Bacon End&Pieces"
      },
      {
        "code": "1PHA72TRBLSL0",
        "name": "Fresh Pork Ham Trim 72% Combo"
      },
      {
        "code": "3CLTHIJUM40BLSL4",
        "name": "Frozen Chicken Thighs Jumbo Boneless Skinless 40 Lbs. Bulk Poly Bag in Export Carton"
      },
      {
        "code": "3TBRSCPLBLSL5",
        "name": "Frozen Turkey Scapula Tom Boneless Skinless  Wax Box"
      },
      {
        "code": "2BFLINSKUTBLSL1",
        "name": "Fresh Beef Inside Skirt CV Utility"
      },
      {
        "code": "3BRDINSKBLSV1",
        "name": "Frozen Beef Inside Skirt  Bnls CV Utility"
      },
      {
        "code": "3PHASKINBLSO5",
        "name": "Frozen Pork Ham Skin Bulk Wax Boxes"
      },
      {
        "code": "3CDRMSCTBISO2",
        "name": "Frozen Chicken Miscut Drumettes 40 lbs Bulk Poly"
      },
      {
        "code": "3CBRSBRBLSL2FC",
        "name": "Frozen Chicken Fully Cooked Spicy Breaded Breast Strips 2/5lbs Plain Poly"
      },
      {
        "code": "3COWCHEMBLSL2",
        "name": "Frozen Cow Cheek Meat Bnls Bulk/Poly"
      },
      {
        "code": "1PCCSKPCBLSO0",
        "name": "Fresh Pork Skin Pieces Combo"
      },
      {
        "code": "3PBE1417BLSL2",
        "name": "Frozen Pork Belly Skinless 14/17 B/L Bulk Poly"
      },
      {
        "code": "3PRIBBYBACKBISL3",
        "name": "Frozen Pork Baby Back Ribs  IWP"
      },
      {
        "code": "3CBRMDM20NL40BLSL2",
        "name": "Frozen Chicken MDM 20% down 40 lbs Bulk Wax No Liner"
      },
      {
        "code": "3CLGJMBO15SO2",
        "name": "Frozen Chicken LQ Jumbo Bulk  15KG"
      },
      {
        "code": "3PBE0911BLSL2",
        "name": "Frozen Pork Belly Skinless 9/11 B/L Bulk Poly"
      },
      {
        "code": "3PCCTENDLPPCARBBLSL2",
        "name": "Frozen Pork Tenderloin Lime Pepper La Carbonera"
      },
      {
        "code": "3CLGJMBOBISO2",
        "name": "Frozen Chicken Leg Quarters Jumbo 40lb Bulk Poly"
      },
      {
        "code": "3BCC8515TRBLSL2",
        "name": "Frozen Beef Trim 85/15 Bulk/Poly"
      },
      {
        "code": "3SRISPRIBISL2",
        "name": "Frozen Sow  Spareribs  Bulk/Poly"
      },
      {
        "code": "3BOFHARTBLSL3",
        "name": "Frozen Beef Hearts IWP"
      },
      {
        "code": "3HLGTGMTBLSL2",
        "name": "Frozen Turkey (Hen) Thighs Boneles Skinless 40 lbs Bulk Poly"
      },
      {
        "code": "3TBRSCPLMT40BLSL5",
        "name": "Frozen Turkey Scapula Meat Skinless 40 Lbs Bulk Poly"
      },
      {
        "code": "3CDRDRIQBISO6",
        "name": "Frozen Chicken Drumettes IQF 4/10 lbs Poly"
      },
      {
        "code": "3PHARO955BL2",
        "name": "Frozen Pork Roll Out 95-5 Bulk Poly"
      },
      {
        "code": "3CBR10TRBLSL2",
        "name": "Frozen Chicken Breast Trim 10% down 40lb Bulk Poly"
      },
      {
        "code": "3PHA0023BISO2",
        "name": "Frozen Pork Ham B/I 23 UP Bulk/Poly"
      },
      {
        "code": "2PLO21DNBIBL1",
        "name": "Fresh Pork Loin 21lb DN B/I BULK POLY"
      },
      {
        "code": "2BFLOUSKBLSOF4",
        "name": "Fresh Beef Outside Skirt Skin Off Boneless CV"
      },
      {
        "code": "2PLO22DNBISL1",
        "name": "Fresh Pork Loin 22lb DN B/I CV"
      },
      {
        "code": "3TLGTGMTBLSL152",
        "name": "Frozen Turkey Tom Thigh Meat Boneles Skinless 15Kg Bulk Poly"
      },
      {
        "code": "2CBRWODYBLSL1",
        "name": "Fresh Chicken Woody Breast  Boneless Skinless Combo Bins"
      },
      {
        "code": "3CLGWHLEMEDBISO2",
        "name": "Frozen Chicken Whole Legs Medium 40 Lb  Bulk Poly"
      },
      {
        "code": "3PHAROBUBLSL18FATCOV2",
        "name": "Frozen Pork Roll Out Butcher 1/8 fat bulk poly"
      },
      {
        "code": "3BCHCLODSELBLSL1",
        "name": "Frozen Beef Clods Bnls Select CV"
      },
      {
        "code": "3CBRFLSPIBLSL11",
        "name": "Frozen Chicken Spicy Breaded Fillets Boneless Skinless Fully Cooked 2/5 lbs poly"
      },
      {
        "code": "3CWNLARGEBISO2",
        "name": "Frozen Chicken Miscut Wings Large 4x5 Kg Poly Bag"
      },
      {
        "code": "3TWG2022ASO2",
        "name": "Frozen Turkey Whole  Grade A, basted  20-22 Lb each"
      },
      {
        "code": "2BSLOCHOBISL1",
        "name": "Fresh Beef Shortloin 0x1 Bone In Choice CV 1 Pc/Bag"
      },
      {
        "code": "3BOBACRTBISO1NR",
        "name": "Frozen Beef No Roll Backribs  CV"
      },
      {
        "code": "3PLOCENTCUTBISL1",
        "name": "Frozen Pork Loin Bone In Center Cut CV"
      },
      {
        "code": "3CBRWHLL40BISO4",
        "name": "Frozen Chicken Whole Breast Bone in Skin on 4/10 lbs Poly, 40lb Bulk"
      },
      {
        "code": "2BLOCULTBLSLENFRCLL1",
        "name": "Fresh Beef Picana Enfriada CLL"
      },
      {
        "code": "3CBRWHLEBLSO4",
        "name": "Frozen Chicken B/L Whole Breast"
      },
      {
        "code": "2BBRISKCHO9UPBLSL1",
        "name": "Fresh Beef Brisket Choice 9 UP Box  CV"
      },
      {
        "code": "3VFFWEDSPI8CUTSOSO11",
        "name": "Frozen French Fries Wedges York EverCrisp Zesty Wedge Skin On 8-Cut 6x4.5 lbs"
      },
      {
        "code": "3BFLINSKBLSL1",
        "name": "Frozen Beef Inside Skirt CV YP ISK"
      },
      {
        "code": "3PCC45TRBLSL2",
        "name": "Frozen Pork Trim 45%  Bulk Poly"
      },
      {
        "code": "3VFFFF3805SO11",
        "name": "Frozen French Fries 3/8  6 bags x 5 lbs"
      },
      {
        "code": "3CWNMCIFBISO11",
        "name": "Frozen Chicken Cut Wings IQF RTC  Bulk"
      },
      {
        "code": "2BRDGNCKSELOBLSL1",
        "name": "Fresh Beef Gooseneck (Bottom round) Select Box CV"
      },
      {
        "code": "3PHAROBLBWSL3",
        "name": "Frozen Pork  Roll Out to the Blue Wax Box"
      },
      {
        "code": "1PCC0FATBLSL0",
        "name": "Fresh Pork Cutting Fat Combo"
      },
      {
        "code": "3CBRTENCLIBLSO6",
        "name": "Frozen Chicken Medium Breast Tender Clipped 4/10 lbs Poly"
      },
      {
        "code": "1BCHSHRBISL4",
        "name": "Fresh Beef Chuck Short Rib cvp"
      },
      {
        "code": "3PHA80TRBLSL2",
        "name": "Frozen Pork Ham Trim 80% and membrane Bulk/Poly"
      },
      {
        "code": "3SRISRP2BISL2",
        "name": "Frozen Sow (Light) Sparerib Pieces #2 Bulk/Poly"
      },
      {
        "code": "3CBR15TRBLSL240NL",
        "name": "Frozen Chicken Breast Trim 15% down,  40Lbs Bulk Wax No Liner"
      },
      {
        "code": "3PLO0ENDBISL1SAV",
        "name": "Frozen Pork Sirloin B/I with Savory Flavor CV"
      },
      {
        "code": "3PCCSHBISL2",
        "name": "Frozen Pork Shoulder Bulk Poly"
      },
      {
        "code": "3CWNSPIBISO2",
        "name": "Frozen Chicken Spice Wings IQF Bulk"
      },
      {
        "code": "1PBEFATBLSO0",
        "name": "Fresh Pork Belly Fat with skin Combo"
      },
      {
        "code": "1PLOSKIBLSO0",
        "name": "Fresh Pork Back skin Combo"
      },
      {
        "code": "3PSLBAC1822BLSL2",
        "name": "Frozen Pork Layout Sliced Bacon (18-22) Count"
      },
      {
        "code": "3PHAOTERBLSL2",
        "name": "Frozen Pork Outer Shank Bulk/Poly"
      },
      {
        "code": "3BTELOBLS0454",
        "name": "Frozen Beef Tenderloin Utility 4-5 CV"
      },
      {
        "code": "2BFILE45BLSL1",
        "name": "Fresh Beef LOMO 4/5 LB S/C"
      },
      {
        "code": "2BLTSBLSL1XT4NRBA",
        "name": "Fresh Beef No Roll Black Angus Top Sirloin Butt XT CV"
      },
      {
        "code": "2BSHKSBISO1",
        "name": "Fresh Beef Hind Shank CV 2 Pc /Bag"
      },
      {
        "code": "3CWNMCIFBISO2",
        "name": "Frozen Chicken Miscut Wings IQF Bulk"
      },
      {
        "code": "1POFFATBLSO0",
        "name": "Fresh Pork Jowl Fat with skin Combo"
      },
      {
        "code": "3CBRJMBOFLLTBLSL6",
        "name": "Frozen Jumbo Chicken Breast Fillets Boneless Skinless 4/10 Lbs."
      },
      {
        "code": "3BLORBEYCHO2X2BISO1",
        "name": "Frozen Beef Rib Eye 2X2 Choice Bone In  CV"
      },
      {
        "code": "3PHA0ENDBISOLPACK1",
        "name": "Frozen Pork Ham end B/I Soldier Packed"
      },
      {
        "code": "3PLO22DNBISL2",
        "name": "Frozen Pork Loin 22lb DN B/I Bulk"
      },
      {
        "code": "3PHANATFATCBLSO2",
        "name": "Frozen Pork Ham Boneless Natural Fat Bulk Poly"
      },
      {
        "code": "3PLO42TRBLSL2",
        "name": "Frozen Pork Loin Trim 42% Bulk/Poly"
      },
      {
        "code": "3POFJWTRBLSL2",
        "name": "Frozen Pork Jowl  Trim  Bulk Poly"
      },
      {
        "code": "1BTM2CHOIBLSL4",
        "name": "Fresh Beef Ribeye Tomahawk  Choice BI CV"
      },
      {
        "code": "1CTELOBLSO5UP4",
        "name": "Frozen Cow Tenderloin Utility 5 Up CV 1 Pc per Bag ( 8 Pc per box)"
      },
      {
        "code": "3POFSNUTBLSO5",
        "name": "Frozen Pork Snouts Wax Box"
      },
      {
        "code": "3CBRSKLLBISO4",
        "name": "Frozen Chicken Breast Bone in Skin on 15Kg Layer Pack"
      },
      {
        "code": "3PCC60TMBLSL2",
        "name": "Frozen Pork Trim 60%  Tenderloin"
      },
      {
        "code": "3TWG2628ASO2",
        "name": "Frozen Turkey Whole  Grade A, basted  26-28 Lb each"
      },
      {
        "code": "3POFHFETBISO2",
        "name": "Frozen Pork Hind Feet Bulk/Poly"
      },
      {
        "code": "3COFGZZA65SL2",
        "name": "Frozen Chicken Gizzards  6x5lbs"
      },
      {
        "code": "3POFSTOMPOLBLSL2",
        "name": "Estomago de Cerdo Congelado Poliblok en Caja Corte Mariposa"
      },
      {
        "code": "2CTELOBLSO5UP4",
        "name": "Fresh Cow Tenderloin Utility 5 Up CV 1 Pc per Bag ( 8 Pc per box)"
      },
      {
        "code": "3VFFF146X45SHOESTSL1",
        "name": "Frozen French Fries 1/4 Shoestring  6X4.5 Lbs. With Salt Skin On"
      },
      {
        "code": "3POFFFETBISO2",
        "name": "Frozen Pork Front Feet Bulk/Poly"
      },
      {
        "code": "1PBE1517BLSL0",
        "name": "Fresh Pork Belly Skinless 15/17 B/L Combo"
      },
      {
        "code": "3POFJSLAWXSLA2",
        "name": "Frozen Pork Jowl Skinless Slashed wax lined box"
      },
      {
        "code": "3SOBE0911BLSL2",
        "name": "Frozen Sow Belly Skinless 9/11 B/L Bulk Poly"
      },
      {
        "code": "2BLORBHICHBISL1",
        "name": "Fresh Beef Lipon Ribeye B/I High Choice Angus CV"
      },
      {
        "code": "3CWG03UPBISO2",
        "name": "Frozen Chicken Wogs 3-3.5 Lbs each 12HD Bulk Poly"
      },
      {
        "code": "3PLO1822BISL3",
        "name": "Frozen Pork Loin 18 - 22lb  B/I IWP"
      },
      {
        "code": "3PCCSKMXBLSO2",
        "name": "Frozen Pork Mixed Skins Bulk Poly"
      },
      {
        "code": "3VFFFF3805SO1122",
        "name": "Frozen French Fries 3/8  6 bags x 5 lbs kract carton"
      },
      {
        "code": "3PBESBACBLSL9",
        "name": "Frozen Pork Smoked Bacon Layer Pack No.2"
      },
      {
        "code": "2CLGSMLLBISO2",
        "name": "Fresh Chicken Leg Quarters Small 40lb Bulk Poly"
      },
      {
        "code": "3CBRINFLBLSL9",
        "name": "Frozen Chicken Breast Inner Fillets Unsized With Tendon Layer Pack"
      },
      {
        "code": "2BOFTONGBLSL1",
        "name": "Fresh Beef Tongues #1 Swiss Cut Black"
      },
      {
        "code": "3CBRTRIMBLSL2",
        "name": "Frozen Chicken Breast Slither Slicer Trim Boneless blk"
      },
      {
        "code": "3CBRBTTFBLSL9",
        "name": "Frozen Chicken Breast Boneless Skinless Full Butterfly Layer Pack"
      },
      {
        "code": "3BLONYWAYBLSL1",
        "name": "Frozen Beef Wagyu New York 5 Star"
      },
      {
        "code": "3CBRBR20BLSO2",
        "name": "Frozen Chicken RTC Breast Fillets 20 Lbs. Bulk"
      },
      {
        "code": "1POFJUNSLABLSO0",
        "name": "Fresh Pork Jowl Skin On Unslashed Combo"
      },
      {
        "code": "2CLG40DRBISO2",
        "name": "Fresh Chicken Jumbo Drumsticks 40lb  Bulk/Poly"
      },
      {
        "code": "3PLO72TRWXSL2",
        "name": "Frozen Pork Loin Trim 72% Wax box"
      },
      {
        "code": "2PRISPRIBMDL1",
        "name": "Fresh Pork Spareribs Medium CV"
      },
      {
        "code": "3PLOSTOFBLSL1",
        "name": "Frozen Pork Loin Str.Off  B/L CV"
      },
      {
        "code": "3VHASHBROWNPAT6X25",
        "name": "Frozen Hash Brown Patties 6 X 2.5 Kg"
      },
      {
        "code": "3PRIRIBLBISL2",
        "name": "Frozen Pork Riblets Bulk/Poly"
      },
      {
        "code": "3PCCPM65BLSL2",
        "name": "Frozen Pork Pump Trim  65%  Bulk Poly"
      },
      {
        "code": "3BCHSHRBISL4",
        "name": "Frozen Beef Chuck Short Rib cvp"
      },
      {
        "code": "1PSHJSKNBLSO0",
        "name": "Fresh Pork Jowl Skin Combo"
      },
      {
        "code": "3TWG2426BISO2",
        "name": "Frozen Turkey Whole 24-26Lbs"
      },
      {
        "code": "1PHAROBLBLSL0",
        "name": "Fresh Pork Ham B/L Blue Combo"
      },
      {
        "code": "3PCCMIDBIS03",
        "name": "Frozen Pork Middles IWP"
      },
      {
        "code": "3POFJSLABLSL2",
        "name": "Frozen Pork Jowl Skinless Slashed Bulk/Poly"
      },
      {
        "code": "3PLOSTONCCBL1",
        "name": "Frozen Pork Loin Strap On Boneless Center Cut  CV"
      },
      {
        "code": "3BCOSINTBLSL2",
        "name": "Frozen Cow Small Intestine/Tripas   Bulk/Poly"
      },
      {
        "code": "3BOFSINTBLSL2",
        "name": "Frozen Beef Small Intestine/Tripas   Bulk/Poly"
      },
      {
        "code": "3PBE1112BLSL2",
        "name": "Frozen Pork Belly Skinless 11/12 B/L Bulk Poly"
      },
      {
        "code": "1PBE912BLSL0",
        "name": "Fresh Pork Belly Skinless 9/12 B/L Combo"
      },
      {
        "code": "3CBRFLBBLSLTRDD11",
        "name": "Frozen Chicken Breaded Breast Fillet Tray Pack Delicias del Dia"
      },
      {
        "code": "3CCCBRDDBISO2",
        "name": "Frozen Chicken Breaded Bone in Random Pieces RTC, 8PC Cut, #2"
      },
      {
        "code": "3CWNJMCTOISO6",
        "name": "Frozen Chicken Jumbo Economy Wings 4/10 lbs Poly"
      },
      {
        "code": "3CBRFLLTBLSL6",
        "name": "Frozen Chicken Breast Fillet Boneless Skinless 4/10 lbs Poly"
      },
      {
        "code": "3BCHCKRLBLSL1",
        "name": "Frozen Beef Chuck Roll Boneless cvp"
      },
      {
        "code": "3PBE1012BLSL2",
        "name": "Frozen Pork Belly Skinless 10/12 B/L Bulk Poly"
      },
      {
        "code": "3VFFWED8CUTSO11",
        "name": "Frozen French Fries Wedges  Skin On 8-Cut 6x5 lbs"
      },
      {
        "code": "3CSKBLSO240NL",
        "name": "Frozen Chicken Skins  40Lbs Bulk Wax No Liner"
      },
      {
        "code": "3CSHAFORCBISL1",
        "name": "Frozen Cow Fore Shank CVP"
      },
      {
        "code": "3CBRBFBLSL121",
        "name": "Frozen Chicken Breasts  Boneless Skinless"
      },
      {
        "code": "3SOTENDBLSL1",
        "name": "Frozen Sow Tenderloin head On CV"
      },
      {
        "code": "3CCNUGGSBLSL11",
        "name": "Frozen Chicken Nuggets Fully Cooked Breaded 4/5 lbs Clear Bag"
      },
      {
        "code": "3CLG40DRBLSO2",
        "name": "Frozen Chicken Jumbo Drumsticks  B/L S/L 40lbs  Bulk/Poly"
      },
      {
        "code": "3BLOTSIRBLSL1",
        "name": "Frozen Beef Top Sirloin Bnls  CV"
      },
      {
        "code": "3CBRTRD10BLSL2",
        "name": "Frozen Chicken Tenders Breaded RTC 10 lbs bulk Poly"
      },
      {
        "code": "3PCC72SKTRBLSL2",
        "name": "Frozen Pork Skirt Trim 72% Lean Bulk/Poly"
      },
      {
        "code": "2BLONYPRBLSL1",
        "name": "Fresh Beef New York Prime Bonless  CV"
      },
      {
        "code": "3PCC42TRBLSL2",
        "name": "Frozen Pork Trim 42%  Bulk Poly"
      },
      {
        "code": "3CBRFLIFBLSL2",
        "name": "Frozen Chicken Breast Fillet Pieces Boneless Skinless IQF #2"
      },
      {
        "code": "1TLGDRMSBISO2",
        "name": "Fresh Tom Turkey Drums 30lbs Bulk Poly"
      },
      {
        "code": "3CLGNUGGSBISO2",
        "name": "Frozen Chicken Nuggets Breaded RTC 20 lbs Bulk"
      },
      {
        "code": "1BCC80TRBLSL5",
        "name": "Fresh Beef Trim 80/20 Wax Box"
      },
      {
        "code": "3CWG04UPBISO212PC",
        "name": "Frozen Chicken WOGs 3.5 -4.0 lbs each 12 HD per Carton Bulk Poly"
      },
      {
        "code": "2BLORBEYHICHBLSL1",
        "name": "Fresh Beef Lipon Ribeye 2 High Choice Angus B/L CV"
      },
      {
        "code": "3PRINACTBISL2",
        "name": "Frozen Pork Brisket Bone Narrow Cut  Bulk/Poly"
      },
      {
        "code": "3PHA0000LCBISO2",
        "name": "Frozen Pork Ham B/I Long Cut Bulk/Poly"
      },
      {
        "code": "2CWG03UPBISO12PERPC",
        "name": "Fresh Chicken WOGs 3.0 Lbs, -3.5 lbs each 12 Head per Carton Bulk Poly"
      },
      {
        "code": "3PRIBACKBISL1",
        "name": "Frozen Pork Back Ribs CV"
      },
      {
        "code": "3CBRTDRRTCBLS85O2",
        "name": "Frozen Chicken Breast Tenders Breaded RTC 8/5 lbs poly"
      },
      {
        "code": "3CBRTCD20BLSL11",
        "name": "Frozen Chicken RTC Breaded Breast Fillets Bulk 20lbs Bulk Poly"
      },
      {
        "code": "3PBESBITDDBLSL1",
        "name": "Frozen Pork Smoked Bites 2Lb CV Delicias del Dia"
      },
      {
        "code": "3BRDIRC4BLSL1",
        "name": "Frozen Beef Inside Round 1/4 XT Bnls Choice CV"
      },
      {
        "code": "3CBRFLLTBLSL9",
        "name": "Frozen Chicken Breast Fillet Boneless Skinless Layer Pack 15 Kg"
      },
      {
        "code": "3BOFFEETBISO2",
        "name": "Frozen Beef Feet  Bulk/Poly"
      },
      {
        "code": "3TSHSCPLBLSL2",
        "name": "Frozen Turkey (Tom) Scapula Meat 40 lb Bulk Poly"
      },
      {
        "code": "3PCC85TRSHABLSL5",
        "name": "Frozen Pork Trim 85% Boneless Shank Wax Box"
      },
      {
        "code": "3CLTHM410BLSL2",
        "name": "Frozen Chicken Thigh Meat"
      },
      {
        "code": "3CBRDELDBLSL4",
        "name": "Frozen Chicken Breast Boneless Skinless CV 1 Kg - Delicias del Dia"
      },
      {
        "code": "2BRB2PRIMBLSL4NRBA",
        "name": "Fresh Beef Black Angus Ribeye Prime Lip On UP BI CV"
      },
      {
        "code": "2BCHSLOBISL1",
        "name": "Fresh Beef Short Loin 0x1 B/I CV"
      },
      {
        "code": "3PCCROPI99BISO2",
        "name": "Frozen Pork Roaster Pig #1 90-99 Lb Bulk Poly"
      },
      {
        "code": "2PLO21UPBISL1",
        "name": "Fresh Pork Loin 21lb UP B/I CV"
      },
      {
        "code": "3BRDINCAPOFFBLSL1",
        "name": "Frozen Beef Inside Round Cap Off CVP"
      },
      {
        "code": "2CBRWHLEBISO4",
        "name": "Fresh Chicken Whole Breast Bone in Skin on 40 lbs Bulk CVP"
      },
      {
        "code": "3CWG04UPBISO2",
        "name": "Frozen Chicken Wogs 4Lb UP Bulk/Poly"
      },
      {
        "code": "1PHA0000BISO0",
        "name": "Fresh Pork Ham B/I Combo"
      },
      {
        "code": "3PBENO02BLSL5",
        "name": "Frozen Pork Belly No.2 Boneless Skinless Wax Box"
      },
      {
        "code": "1SOWRISTLSBISL1",
        "name": "Fresh Sow St Louis Spareribs CVP"
      },
      {
        "code": "3SOWRISPRIBMDL1",
        "name": "Frozen Sow Medium Spareribs CVP"
      },
      {
        "code": "3PSHOPCNIBIS03",
        "name": "Frozen Pork Shoulder Picnic  IWP"
      },
      {
        "code": "2BBOTTROFLCHOBLSL1",
        "name": "Fresh Beef Bottom Round Flat Choice CV 1Pc/Bag"
      },
      {
        "code": "1POFJUNSBLSL0",
        "name": "Fresh Pork Jowl Skinless Unslashed Combo"
      },
      {
        "code": "2CHALWINBISO1",
        "name": "Fresh Chicken Front Halves Bone In Skin On with Wings in Combos"
      },
      {
        "code": "2BTAPCUPICABLSL1",
        "name": "Fresh Beef Pica単a CV Box"
      },
      {
        "code": "3PBE50TRBLSL2",
        "name": "Frozen Pork Belly Trim  Bulk Poly"
      },
      {
        "code": "3PLOSTONCARBOBLSL1",
        "name": "Frozen Pork Loin Str.On Boneless CV La Carbonera"
      },
      {
        "code": "1PRISPRIBCDL2PC1",
        "name": "Fresh Pork Spareribs 2PC CV"
      },
      {
        "code": "3CBRTENCLIBLSOJUM2",
        "name": "Frozen Chicken Jumbo Breast Tender Line Run Clipped 40 Lbs Bulk Poly"
      },
      {
        "code": "3CLGMEATBLSO9",
        "name": "Frozen Chicken Legs Jumbo Boneless Skinless 28 Lbs Layer Pack"
      },
      {
        "code": "3CBRSPLTMEDBISOTP",
        "name": "Frozen Chicken Medium Split Breast Bone In Skin On Tray Pack"
      },
      {
        "code": "3TWG2024ASO2",
        "name": "Frozen Turkey Whole Plant  Grade , basted  20-24 Lb each"
      },
      {
        "code": "3PHDJWINBISO5",
        "name": "Frozen Pork Head Jowl in Bulk Wax Box"
      },
      {
        "code": "1PSHBUTTBLSL0",
        "name": "Fresh Pork Boston Butt B/L Combo"
      },
      {
        "code": "2BLONYBICHOENFRT1",
        "name": "Fresh Beef New York/ Bife de Chorizo en Trozos Enfriado CLL"
      },
      {
        "code": "2BEENTRAENFRCLLBLSL1",
        "name": "Fresh Beef Entra単a Enfriada CLL"
      },
      {
        "code": "1PCCSHBISL0",
        "name": "Fresh Pork Shoulder Bone In Combo"
      },
      {
        "code": "3PLOFATBLSO5",
        "name": "Frozen Pork Back Fat Skin On Wax Box"
      },
      {
        "code": "2CBRMDM20NL40BLSL2",
        "name": "Fresh Chicken MDM 20% down 40 lbs Bulk Wax No Liner"
      },
      {
        "code": "3CBRFLRTCBLSL11",
        "name": "Frozen Chicken Spicy Breaded Breast Fillets Boneless Skinless RTC 4/5 lbs Sealed Poly Bag"
      },
      {
        "code": "3BCC50TRBLSL5",
        "name": "Frozen Beef Trim 50/50 Wax Lined Box"
      },
      {
        "code": "2PLOSTOFBLSL1",
        "name": "Fresh Pork Loin Strap Off  Boneless CV"
      },
      {
        "code": "3CBRSLTRMBLSL2",
        "name": "Frozen Chicken Slicer Trim Bulk With Liner"
      },
      {
        "code": "3VFFF146X6SHOESTRSL1",
        "name": "Frozen French Fries 1/4 Shoestring  6X6 Lbs. Skin Off"
      },
      {
        "code": "3PHA000014DNBISO3",
        "name": "Frozen Pork Ham Bone In Skin On 14 Down Lbs IWP"
      },
      {
        "code": "3POFHARTBLSL5",
        "name": "Frozen Pork Heart Wax Box"
      },
      {
        "code": "3SOTONGRBLSL2",
        "name": "Frozen Sow Tongues  Bulk Poly"
      },
      {
        "code": "2BCHCKTAILCHOBLSL1",
        "name": "Fresh Beef  Chuck Tail Flap Choice Box CV"
      },
      {
        "code": "3CBRSFIRTC33BLSO2",
        "name": "Frozen Chicken RTC Spicy Breaded Breast Fillet 33.73 Lbs. Bulk Poly"
      },
      {
        "code": "3PBELBLSL2",
        "name": "Frozen Pork Belly Skinless Bulk Poly"
      },
      {
        "code": "3PHDCHINBLSO3",
        "name": "Frozen Pork Cheek Meat B/L"
      },
      {
        "code": "3POFBRINBLSL2",
        "name": "Frozen Pork Brains Bulk/Poly"
      },
      {
        "code": "1SOWCCBISO03PCS",
        "name": "FRESH SOW CARCASSES 3 PIECES COMBOS"
      },
      {
        "code": "2PRIBACKBISL2",
        "name": "Fresh Pork Back Ribs 2lb Dn Bulk/Poly"
      },
      {
        "code": "2CBRFLLTBLSL6",
        "name": "Fresh Chicken Breast Jumbo Fillet Boneless Skinless 4/10 lbs Poly"
      },
      {
        "code": "3CBRCHBRD20BLSL2",
        "name": "Frozen Chicken Breast Chunks Breaded RTC 20 lbs Bulk Poly"
      },
      {
        "code": "3CBR3PLTBLSL2",
        "name": "Frozen Chicken B/L Breast 3P Tray Pack"
      },
      {
        "code": "3TURMDMBLSL2",
        "name": "Frozen Turkey Mechanically Deboned Meat (MDM) Poly"
      },
      {
        "code": "2SASMKBBQDR520",
        "name": "Fresh carbonera Smoke BBQ Sauce Drums 520 Lbs"
      },
      {
        "code": "3PCC72TRBLSL5",
        "name": "Frozen Pork Trim 72% Bulk Wax Box"
      },
      {
        "code": "2BRDINRDBLSL1",
        "name": "Fresh Beef Inside Round Bnls CV"
      },
      {
        "code": "2PHAHOBISO2",
        "name": "Frozen Pork Butcher Ham Hocks Bulk Poly"
      },
      {
        "code": "1PCCSHBISO0",
        "name": "Fresh Pork Shoulder Bone In Skin On Combo"
      },
      {
        "code": "3BCC73TRBLSL2",
        "name": "Frozen Beef  Trim 73/27 Angus Hi Choice Chops 10 lbs"
      },
      {
        "code": "3PSHPCNOBLSL5",
        "name": "Frozen Pork Picnic Cushion Out B/L Wax box"
      },
      {
        "code": "3PSHCOLLBUTCBISL2",
        "name": "Frozen PorkCollar Butt IWP Bulk Poly"
      },
      {
        "code": "3POFSNUTBLSO2",
        "name": "Frozen Pork Snouts Bulk/Poly"
      },
      {
        "code": "2CTHMBISO2",
        "name": "Fresh Chicken Medium Thighs Bone in Skin on 40lbs bulk poly"
      },
      {
        "code": "2BLOTSNBBLSL1SE",
        "name": "Fresh Beef Top Sirloin Bnls  Select CV"
      },
      {
        "code": "3CLGTRDRBISO2",
        "name": "Frozen Chicken Drumsticks Tray Pack"
      },
      {
        "code": "3CWNPRTYBISO2",
        "name": "Frozen Chicken Party/Cut Wings  Bulk Poly"
      },
      {
        "code": "3CLGDRMSBLSL6",
        "name": "Frozen Chicken Drumsticks Boneless Skinless 4/10 lbs Poly"
      },
      {
        "code": "1TTOMTHMBLSL0",
        "name": "Fresh Turkey Tom Thigh Meat Boneless Skinless in Combos"
      }
    ];
    this.products.sort((a, b) => a.name.localeCompare(b.name));
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      defaultOpen: false,
      idField: 'code',
      textField: 'name',
      tooltipField: 'item_tooltip',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: this.showAll,
      itemsShowLimit: 999999,
      allowSearchFilter: this.ShowFilter,
      allowSmartSearch: this.smartSearch
    };
    this.myForm = this.fb.group({
      city: [this.selectedItems]
    });
  }

  onItemSelect(item: any) {
    // console.log('onItemSelect', item);
    // console.log('form model', this.myForm.get('city').value);
  }
  onItemDeSelect(item: any) {
    // console.log('onItem DeSelect', item);
    // console.log('form model', this.myForm.get('city').value);
  }

  onSelectAll(items: any) {
    // console.log('onSelectAll', items);
  }

  onDropDownClose() {
    console.log('dropdown closed');
  }

  toogleShowAll() {
    this.showAll = !this.showAll;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      enableCheckAll: this.showAll
    });
  }
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      allowSearchFilter: this.ShowFilter
    });
  }

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: 2
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: -1
      });
    }
  }

  handleLimitShow() {
    if (this.limitShow) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        itemsShowLimit: 2
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        itemsShowLimit: 999999
      });
    }
    console.log()
  }

  handleSmartSearch() {
    if ( this.smartSearch ) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        allowSmartSearch: true
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        allowSmartSearch: false
      });
    }
  }




  handleDisableBangalore() {
    // this.products[2].isDisabled = this.disableBangalore;
    // this.products = [...this.products];
  }

  handleReset() {
    this.myForm.get('city').setValue([]);
  }
}

/**
 * Valuation Report Template HTML & Metadata
 */
const valuationReportTemplate = {
  id: 'valuation-report',
  name: 'Official Property Valuation Report (10-Page Format)',
  description: '10-page official property valuation report by Registered Valuer & Chartered Engineer with dynamic highlighted keywords imported from Excel.',
  orientation: 'portrait',
  pageSize: 'A4',
  fields: [
    'report_no', 'date', 'name', 'father_name', 'address',
    'market_value', 'market_value_in_words', 'guideline_value', 'realisable_value', 'distress_value',
    'date_of_inspection', 'date_of_valuation', 'city_town', 'residential_area', 'commercial_area',
    'industrial_area', 'area_economic_class', 'area_urban_class', 'municipality', 'agriculture_conversion',
    'deed_north', 'deed_south', 'deed_east', 'deed_west',
    'actual_north', 'actual_south', 'actual_east', 'actual_west',
    'deed_dim_north', 'deed_dim_south', 'deed_dim_east', 'deed_dim_west',
    'actual_dim_north', 'actual_dim_south', 'actual_dim_east', 'actual_dim_west',
    'extent_site', 'locality_classification', 'surrounding_development', 'land_shape',
    'land_use_type', 'town_planning_approved', 'corner_or_intermediate', 'road_facilities',
    'road_type', 'road_width', 'water_potentiality', 'underground_sewerage',
    'power_supply', 'site_advantages', 'plot_size_north_south', 'plot_size_east_west',
    'plot_area', 'market_rate', 'gdl_rate', 'dlc_reference',
    'land_gdv', 'land_mv', 'bld_type', 'bld_construction',
    'bld_year', 'bld_floors_height', 'bld_plinth_area', 'bld_ext_condition',
    'bld_int_condition', 'bld_layout_date', 'bld_authority', 'bld_authenticity',
    'spec_superstructure', 'spec_doors_windows', 'spec_elec_class', 'spec_elec_light',
    'spec_elec_fan', 'spec_elec_plug', 'spec_plumb_closets', 'spec_plumb_basins',
    'spec_plumb_urinals', 'spec_plumb_tubs', 'spec_plumb_taps', 'spec_plumb_fixtures',
    'bld_plinth_val', 'bld_roof_height', 'bld_age', 'bld_rep_rate',
    'bld_rep_cost', 'bld_depr_pct', 'mbld_vlu', 'bld_builtup_area',
    'bld_dlc_rate', 'bld_dlc_ref', 'gbv', 'ngbv',
    'ngbv_lacs', 'total_mv', 'total_mv_say', 'total_gv',
    'total_gv_lacs', 'total_mv_lacs', 'realisable_value_lacs', 'distress_value_lacs',
    'distress_value_in_words', 'photo_1', 'photo_2'
  ],
  sampleData: {
    report_no: 'REPORT NO.',
    date: 'DATE',
    name: 'NAME',
    father_name: 'FATHER NAME',
    address: 'ADDRESS',
    market_value: 'MARKET VALUE',
    market_value_in_words: 'MARKET VALUE IN WORD',
    guideline_value: 'GUIDE LINE VALUE',
    realisable_value: 'REALISABLE VALUE',
    distress_value: 'DISTRESS VALUE',
    date_of_inspection: 'DOI',
    date_of_valuation: 'DOV',
    city_town: 'A',
    residential_area: 'B',
    commercial_area: 'Commercial Area',
    industrial_area: 'None',
    area_economic_class: 'Middle Class',
    area_urban_class: 'Urban Area',
    municipality: 'Nagar Palika Sheopur',
    agriculture_conversion: 'No',
    deed_north: 'Araji Ajay Singh Kreta',
    deed_south: 'Sheopur Baroda Road',
    deed_east: 'Rasta 3.66 m Choda',
    deed_west: 'Dukaan Ve Araji Jebunisha',
    actual_north: 'Shop Ajay Singh',
    actual_south: 'Sheopur Baroda ROad',
    actual_east: '3.66 m Wide Road',
    actual_west: 'Shop',
    deed_dim_north: '6.71 m',
    deed_dim_south: '6.71 m',
    deed_dim_east: '3.36 m',
    deed_dim_west: '3.36 m',
    actual_dim_north: '6.71 m',
    actual_dim_south: '6.71 m',
    actual_dim_east: '3.36 m',
    actual_dim_west: '3.36 m',
    extent_site: '22.55 Sq.mt',
    locality_classification: 'Situated in Commercial area',
    surrounding_development: 'Surrounding area is developing Area',
    land_shape: 'Rectangular',
    land_use_type: 'Commercial Use,',
    town_planning_approved: 'Not Verified',
    corner_or_intermediate: 'Corner Plot',
    road_facilities: 'Yes',
    road_type: 'C.C Road',
    road_width: 'Road Width>20 feet',
    water_potentiality: 'Yes',
    underground_sewerage: 'No',
    power_supply: 'Yes',
    site_advantages: 'Property is at Developing area hence Future of the property is positive',
    plot_size_north_south: '6.71 m & 6.71 m.',
    plot_size_east_west: '3.36 m & 3.36 m.',
    plot_area: 'PLOT AREA',
    market_rate: 'MARKET RATE',
    gdl_rate: 'GDL RATE',
    dlc_reference: 'Rate adopted from Sheopur DLC Calendar 2025–26, Page No. 14, Sr. No. 138.',
    land_gdv: 'LAND GDV',
    land_mv: 'LAND MV',
    bld_type: 'Commercial Building',
    bld_construction: 'RCC Building',
    bld_year: 'Not specifically verified',
    bld_floors_height: 'G.F 3 mtr,',
    bld_plinth_area: 'G.F (PL AREA sqm)',
    bld_ext_condition: 'Good',
    bld_int_condition: 'Good',
    bld_layout_date: 'Not Obtained',
    bld_authority: 'Nagar Palika Sheopur',
    bld_authenticity: 'Not Verified',
    spec_superstructure: 'R.C.C Super Structure',
    spec_doors_windows: 'Wooden Doors, Windows,',
    spec_elec_class: 'Ordinary',
    spec_elec_light: 'Available – details not specifically counted',
    spec_elec_fan: 'Available – details not specifically counted',
    spec_elec_plug: 'Available – details not specifically counted',
    spec_plumb_closets: 'Not specifically verified',
    spec_plumb_basins: 'Not specifically verified',
    spec_plumb_urinals: 'Not specifically verified',
    spec_plumb_tubs: 'None',
    spec_plumb_taps: 'Not specifically verified',
    spec_plumb_fixtures: 'Not specifically verified',
    bld_plinth_val: 'PL AREA',
    bld_roof_height: '3 mtr',
    bld_age: '20Yr',
    bld_rep_rate: '10500/-',
    bld_rep_cost: '236775/-',
    bld_depr_pct: '20%',
    mbld_vlu: 'MBLD VLU/-',
    bld_builtup_area: '22.55',
    bld_dlc_rate: '46,000/-',
    bld_dlc_ref: 'Sheopur DLC Calendar 2025–26, Page No. 14, Sr. No. 138',
    gbv: 'GBV',
    ngbv: 'NGBV',
    ngbv_lacs: '8.30',
    total_mv: 'TOTAL MV',
    total_mv_say: '4925000.00',
    total_gv: 'TOTAL GV',
    total_gv_lacs: '21.83',
    total_mv_lacs: '49.25',
    realisable_value_lacs: '46.79',
    distress_value_lacs: '44.32',
    distress_value_in_words: 'Forty Four Lakh Thirty Two Thousand',
    photo_1: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
    photo_2: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  htmlContent: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @page {
    size: A4 portrait;
    margin: 15mm 15mm 15mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Times New Roman', Times, Georgia, serif;
    color: #111;
    font-size: 13.5px;
    line-height: 1.45;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .page {
    page-break-after: always;
    min-height: 1040px;
    position: relative;
    padding-bottom: 25px;
  }
  .page:last-child {
    page-break-after: avoid;
  }
  /* Dynamic highlight styling matching user PDF */
  .hl {
    background-color: #ffff00 !important;
    color: #000 !important;
    padding: 1px 3px;
    font-weight: bold;
    border-radius: 2px;
    display: inline;
  }
  /* Header styling */
  .header-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .header-table td {
    vertical-align: middle;
  }
  .brand-logo-area {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .brand-logo-svg {
    width: 65px;
    height: 52px;
  }
  .brand-logo-text {
    font-weight: 800;
    font-size: 17px;
    color: #0e4b85;
    letter-spacing: 0.5px;
    font-family: 'Segoe UI', Arial, sans-serif;
    line-height: 1.15;
  }
  .brand-logo-sub {
    font-size: 10px;
    color: #555;
    letter-spacing: 1px;
    font-weight: 600;
    font-family: 'Segoe UI', Arial, sans-serif;
  }
  .consultancy-text {
    text-align: right;
  }
  .consultancy-title {
    font-size: 16px;
    font-weight: 700;
    color: #1a365d;
    margin-bottom: 2px;
  }
  .consultancy-contact {
    font-size: 11.5px;
    color: #222;
    line-height: 1.35;
    font-family: 'Segoe UI', Arial, sans-serif;
  }
  .consultancy-contact a {
    color: inherit;
    text-decoration: none;
  }
  .top-meta-row {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 13.5px;
    color: #555;
  }
  .top-meta-row span {
    color: #111;
  }
  .main-heading {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 25px 0 35px 0;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
  }
  .address-block {
    margin-bottom: 25px;
    line-height: 1.45;
  }
  .subject-line {
    font-weight: bold;
    margin: 20px 0;
    line-height: 1.5;
  }
  .salutation {
    margin-bottom: 15px;
  }
  .body-p {
    margin-bottom: 14px;
    line-height: 1.5;
    text-align: justify;
  }
  .summary-table {
    width: 100%;
    border-collapse: collapse;
    margin: 28px 0;
    text-align: center;
  }
  .summary-table th, .summary-table td {
    border: 1.2px solid #000;
    padding: 10px 8px;
    font-size: 13.5px;
  }
  .summary-table th {
    font-weight: bold;
    background-color: #fbfbfb;
  }
  .summary-table td {
    font-weight: bold;
    height: 48px;
    vertical-align: middle;
  }
  .signature-row {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    align-items: flex-start;
  }
  .signature-left {
    line-height: 1.6;
    font-size: 14px;
    font-weight: bold;
  }
  .signature-right {
    text-align: left;
    line-height: 1.4;
  }
  .signature-right .signer-name {
    font-weight: bold;
    font-size: 14px;
  }
  .page-footer-banner {
    position: absolute;
    bottom: 0;
    left: -15mm;
    right: -15mm;
    background: #7ba7cc;
    color: #ffffff;
    text-align: center;
    padding: 8px 15px;
    font-size: 12.5px;
    font-family: 'Segoe UI', Arial, sans-serif;
    font-weight: 500;
  }
  /* General Sections styling */
  .section-header {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 18px;
    font-family: 'Times New Roman', serif;
  }
  .content-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 15px;
  }
  .content-table td {
    padding: 5px 0;
    vertical-align: top;
    line-height: 1.45;
  }
  .col-num {
    width: 5%;
    font-weight: normal;
  }
  .col-desc {
    width: 47%;
    padding-right: 12px;
  }
  .col-sep {
    width: 3%;
    text-align: center;
  }
  .col-val {
    width: 45%;
  }
  .bordered-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
  }
  .bordered-table th, .bordered-table td {
    border: 1px solid #000;
    padding: 7px 6px;
    font-size: 12.5px;
  }
  .bordered-table th {
    font-weight: bold;
    text-align: center;
    background: #fbfbfb;
  }
  .sub-clause {
    margin-top: 15px;
    font-size: 13px;
    line-height: 1.45;
  }
  .disclaimer-box {
    margin-top: 20px;
    font-size: 13px;
    line-height: 1.5;
    text-align: justify;
  }
  .photosheet-container {
    margin-top: 25px;
    text-align: center;
  }
  .photo-frame {
    display: inline-block;
    max-width: 90%;
    border: 1px solid #ddd;
    padding: 8px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .photo-frame img {
    max-width: 100%;
    max-height: 520px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
</style>
</head>
<body>

  <!-- ==================== PAGE 1: VALUATION REPORT COVER & SUMMARY ==================== -->
  <div class="page">
    <table class="header-table">
      <tr>
        <td style="width: 50%;">
          <div class="brand-logo-area">
            <svg class="brand-logo-svg" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 44 L38 20 L64 44 V72 H12 Z" stroke="#0099dd" stroke-width="4.5" fill="#e6f5fd"/>
              <path d="M42 36 L68 12 L94 36 V72 H42 Z" stroke="#0e4b85" stroke-width="4.5" fill="#ffffff"/>
              <rect x="22" y="50" width="10" height="10" fill="#0099dd"/>
              <rect x="52" y="46" width="10" height="10" fill="#0e4b85"/>
              <rect x="70" y="46" width="10" height="10" fill="#0e4b85"/>
            </svg>
            <div>
              <div class="brand-logo-text">A&V VALUATION</div>
              <div class="brand-logo-sub">REGISTERED VALUER</div>
            </div>
          </div>
        </td>
        <td style="width: 50%;" class="consultancy-text">
          <div class="consultancy-title">A&V Valuation and Consultancy Service</div>
          <div class="consultancy-contact">
            Mbl. No. +91-8435680390<br>
            +91-7024349217<br>
            a&vvaluationandconsultancy@gmail.com
          </div>
        </td>
      </tr>
    </table>

    <div class="top-meta-row">
      <div>Sr No. <mark class="hl">{{report_no}}</mark></div>
      <div>Date, <mark class="hl">{{date}}</mark></div>
    </div>

    <div class="main-heading">VALUATION REPORT</div>

    <div class="address-block">
      <strong>To,</strong><br>
      <strong>The Manager</strong><br>
      <strong>Vyavsayik Evam Audhyogik Sahakari Bank Ltd. Morena</strong><br>
      <strong>Branch Sheopur</strong>
    </div>

    <div class="subject-line">
      Subject: Valuation of the Immovable Property Owned by <mark class="hl">{{name}}</mark> S/o <mark class="hl">{{father_name}}</mark> Situated at <mark class="hl">{{address}}</mark>
    </div>

    <div class="salutation">Dear Sir,</div>

    <div class="body-p">
      As desired by you the Property Owned by <mark class="hl">{{name}}</mark> S/o <mark class="hl">{{father_name}}</mark> Situated at <mark class="hl">{{address}}</mark> was inspected by me for the purpose of assessing the present fair market value of the fixed assets in it.
    </div>

    <div class="body-p">
      In my opinion the present market value of the said Property is <strong>Rs. <mark class="hl">{{market_value}}</mark> Lacs (Rupees <mark class="hl">{{market_value_in_words}}</mark> Only.)</strong>
    </div>

    <div style="margin-top: 15px; margin-bottom: 10px;">
      Further the other valuations are as below: -
    </div>

    <table class="summary-table">
      <thead>
        <tr>
          <th style="width: 25%;">Market Value<br>In Lacs</th>
          <th style="width: 25%;">Guide Line Value<br>In Lacs</th>
          <th style="width: 25%;">Realisable Value<br>In Lacs</th>
          <th style="width: 25%;">Distress Sale<br>In Lacs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rs. <mark class="hl">{{market_value}}</mark><br>Lacs</td>
          <td>Rs <mark class="hl">{{guideline_value}}</mark><br>Lacs</td>
          <td>Rs. <mark class="hl">{{realisable_value}}</mark><br>Lacs</td>
          <td>Rs <mark class="hl">{{distress_value}}</mark><br>Lacs</td>
        </tr>
      </tbody>
    </table>

    <div class="signature-row">
      <div class="signature-left">
        <div>Place: Sheopur (M.P.)</div>
        <div style="margin-top: 8px;">Date: <mark class="hl">{{date}}</mark></div>
      </div>
      <div class="signature-right">
        <div class="signer-name">VIPIN NAGAR</div>
        <div>Registered Valuer,</div>
        <div>Regi. No. IBBI/11/2025/15927</div>
        <div>Chartered Engineer (India)</div>
      </div>
    </div>

    <div class="page-footer-banner">
      Address :- Infront of Choukhi Dhani, Shivpuri Road Sheopur (476337)
    </div>
  </div>

  <!-- ==================== PAGE 2: I- GENERAL ==================== -->
  <div class="page">
    <div class="section-header">I- General</div>

    <table class="content-table">
      <tr>
        <td class="col-num">1-</td>
        <td class="col-desc">Purpose for which the valuation is made</td>
        <td class="col-sep">:</td>
        <td class="col-val">To determine the fair market value of the Prop. For security against Bank loan</td>
      </tr>
      <tr>
        <td class="col-num">2-</td>
        <td class="col-desc">a)- Date of Inspection</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{date_of_inspection}}</mark></td>
      </tr>
      <tr>
        <td class="col-num"></td>
        <td class="col-desc">b)- Date on which the valuation is made</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{date_of_valuation}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">3-</td>
        <td class="col-desc">List of documents produced for perusal</td>
        <td class="col-sep">:</td>
        <td class="col-val">Xerox Copy of Sale deed, Namantran, Photograph Attached</td>
      </tr>
      <tr>
        <td class="col-num">4-</td>
        <td class="col-desc">Name of the owner/(seller) and his/their address</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{name}}</mark> S/o <mark class="hl">{{father_name}}</mark> and Add: - <mark class="hl">{{address}}</mark></td>
      </tr>
      <tr>
        <td class="col-num"></td>
        <td class="col-desc">Details of Share of each owner in case of joint ownership</td>
        <td class="col-sep">:</td>
        <td class="col-val">Ownership</td>
      </tr>
      <tr>
        <td class="col-num">5-</td>
        <td class="col-desc">Brief description of the property</td>
        <td class="col-sep">:</td>
        <td class="col-val">The evaluated property is in the form of Commercial Plot Situated at <mark class="hl">{{address}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">6-</td>
        <td class="col-desc">Location of the property</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{address}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">7-</td>
        <td class="col-desc">City/Town</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{city_town}}</mark></td>
      </tr>
      <tr>
        <td class="col-num"></td>
        <td class="col-desc">Residential Area</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{residential_area}}</mark></td>
      </tr>
      <tr>
        <td class="col-num"></td>
        <td class="col-desc">Commercial Area</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{commercial_area}}</mark></td>
      </tr>
      <tr>
        <td class="col-num"></td>
        <td class="col-desc">Industrial Area</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{industrial_area}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">8-</td>
        <td class="col-desc">Classification of the Area :<br>i) High/Middle/Poor<br>ii) Urban/Semi-Urban/Rural</td>
        <td class="col-sep">:<br>:<br>:</td>
        <td class="col-val"><br><mark class="hl">{{area_economic_class}}</mark><br><mark class="hl">{{area_urban_class}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">9-</td>
        <td class="col-desc">Coming under corporation limit/Village Panchayat/ Municipality</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{municipality}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">10-</td>
        <td class="col-desc">Whether covered under any State/Central Govt. enactments (e.g Urban Land Celling Act.) or notified under agency area/scheduled area/cantonment area</td>
        <td class="col-sep">:</td>
        <td class="col-val">--</td>
      </tr>
      <tr>
        <td class="col-num">11-</td>
        <td class="col-desc">Incase if is an agriculture land, any conversion to house site plots is contemplated</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{agriculture_conversion}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">12-</td>
        <td class="col-desc">Boundaries of the property (as per sale deed)<br>North<br>South<br>East<br>West</td>
        <td class="col-sep"><br>:<br>:<br>:<br>:</td>
        <td class="col-val"><br><mark class="hl">{{deed_north}}</mark><br><mark class="hl">{{deed_south}}</mark><br><mark class="hl">{{deed_east}}</mark><br><mark class="hl">{{deed_west}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">13-</td>
        <td class="col-desc">Boundaries of the property (as per actual)<br>North<br>South<br>East<br>West</td>
        <td class="col-sep"><br>:<br>:<br>:<br>:</td>
        <td class="col-val"><br><mark class="hl">{{actual_north}}</mark><br><mark class="hl">{{actual_south}}</mark><br><mark class="hl">{{actual_east}}</mark><br><mark class="hl">{{actual_west}}</mark></td>
      </tr>
    </table>
    <div style="margin-top: 12px; font-style: normal; font-size: 13px;">
      (Actual boundaries were verified during site inspection and found as stated above).
    </div>
  </div>

  <!-- ==================== PAGE 3: DIMENSIONS & CHARACTERISTICS OF SITE ==================== -->
  <div class="page">
    <div style="margin-bottom: 12px; font-weight: bold; font-size: 14px;">14- Dimensions</div>
    <table style="width: 75%; border-collapse: collapse; margin-bottom: 20px; font-size: 13.5px;">
      <tr>
        <td style="width: 25%; padding: 4px;"></td>
        <td style="font-weight: bold; width: 37%; padding: 4px;">A<br>As per the deed</td>
        <td style="font-weight: bold; width: 38%; padding: 4px;">B<br>Actuals</td>
      </tr>
      <tr>
        <td style="padding: 4px;">North</td>
        <td style="padding: 4px;"><mark class="hl">{{deed_dim_north}}</mark></td>
        <td style="padding: 4px;"><mark class="hl">{{actual_dim_north}}</mark></td>
      </tr>
      <tr>
        <td style="padding: 4px;">South</td>
        <td style="padding: 4px;"><mark class="hl">{{deed_dim_south}}</mark></td>
        <td style="padding: 4px;"><mark class="hl">{{actual_dim_south}}</mark></td>
      </tr>
      <tr>
        <td style="padding: 4px;">East</td>
        <td style="padding: 4px;"><mark class="hl">{{deed_dim_east}}</mark></td>
        <td style="padding: 4px;"><mark class="hl">{{actual_dim_east}}</mark></td>
      </tr>
      <tr>
        <td style="padding: 4px;">West</td>
        <td style="padding: 4px;"><mark class="hl">{{deed_dim_west}}</mark></td>
        <td style="padding: 4px;"><mark class="hl">{{actual_dim_west}}</mark></td>
      </tr>
    </table>

    <table class="content-table" style="margin-bottom: 25px;">
      <tr>
        <td class="col-num">15-</td>
        <td class="col-desc">Extent of the site</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{extent_site}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">16-</td>
        <td class="col-desc">Extent of the site considered for valuation (least of 14a & 14b)</td>
        <td class="col-sep">:</td>
        <td class="col-val">14b</td>
      </tr>
      <tr>
        <td class="col-num">17-</td>
        <td class="col-desc">Whether occupied by the owner/ tenant? If occupied by tenant since how long? Rent received per month.</td>
        <td class="col-sep">:</td>
        <td class="col-val">Occupied by Owners</td>
      </tr>
      <tr>
        <td class="col-num">18-</td>
        <td class="col-desc">Is it freehold or leasehold land?</td>
        <td class="col-sep">:</td>
        <td class="col-val">Free Hold</td>
      </tr>
    </table>

    <div class="section-header">II- CHARACTERISTICS OF THE SITE</div>

    <table class="content-table">
      <tr>
        <td class="col-num">1-</td>
        <td class="col-desc">Classification of locality</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{locality_classification}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">2-</td>
        <td class="col-desc">Development of surrounding areas</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{surrounding_development}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">3-</td>
        <td class="col-desc">Possibility of frequent flooding</td>
        <td class="col-sep">:</td>
        <td class="col-val">Nil</td>
      </tr>
      <tr>
        <td class="col-num">4-</td>
        <td class="col-desc">Availability of the civic amenities like school, hospital, bus stop, market etc.</td>
        <td class="col-sep">:</td>
        <td class="col-val">Near Distance</td>
      </tr>
      <tr>
        <td class="col-num">5-</td>
        <td class="col-desc">Level of land with topographical conditions</td>
        <td class="col-sep">:</td>
        <td class="col-val">N.A.</td>
      </tr>
      <tr>
        <td class="col-num">6-</td>
        <td class="col-desc">Shape of land</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{land_shape}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">7-</td>
        <td class="col-desc">Type of use to which it can be put</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{land_use_type}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">8-</td>
        <td class="col-desc">Any usage restriction</td>
        <td class="col-sep">:</td>
        <td class="col-val">Nil</td>
      </tr>
      <tr>
        <td class="col-num">9-</td>
        <td class="col-desc">Is plot in town planning approved layout</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{town_planning_approved}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">10-</td>
        <td class="col-desc">Corner Plot of Intermediate Plot?</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{corner_or_intermediate}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">11-</td>
        <td class="col-desc">Road facilities</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{road_facilities}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">12-</td>
        <td class="col-desc">Type of road available at present</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{road_type}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">13-</td>
        <td class="col-desc">Which or road-is it below 20ft. or more than 20ft.</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{road_width}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">14-</td>
        <td class="col-desc">Water potentiality</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{water_potentiality}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">15-</td>
        <td class="col-desc">Underground sewerage system</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{underground_sewerage}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">16-</td>
        <td class="col-desc">Power supply is available in the site</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{power_supply}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">17-</td>
        <td class="col-desc">Advantages of the site</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{site_advantages}}</mark></td>
      </tr>
    </table>
  </div>

  <!-- ==================== PAGE 4: PART-A (VALUATION OF LAND) ==================== -->
  <div class="page">
    <div class="section-header">PART-A (Valuation of Land)</div>

    <table class="content-table">
      <tr>
        <td class="col-num">1-</td>
        <td class="col-desc">Size of Plot<br>North & South<br>East & West</td>
        <td class="col-sep"><br>:<br>:</td>
        <td class="col-val"><br><mark class="hl">{{plot_size_north_south}}</mark><br><mark class="hl">{{plot_size_east_west}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">2-</td>
        <td class="col-desc">Total extant of the plot</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{plot_area}}</mark> Sq.mt.</td>
      </tr>
      <tr>
        <td class="col-num">3-</td>
        <td class="col-desc">Prevailing/considered market rate</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{market_rate}}</mark>/- Per Sq.mt.</td>
      </tr>
      <tr>
        <td class="col-num">4-</td>
        <td class="col-desc">Guideline rate obtained from the Register's Office (as evidence, thereof to be enclosed)</td>
        <td class="col-sep">:</td>
        <td class="col-val">Rate is Rs. <mark class="hl">{{gdl_rate}}</mark>/- Per Sq.mt. "<mark class="hl">{{dlc_reference}}</mark>"</td>
      </tr>
      <tr>
        <td class="col-num">5-</td>
        <td class="col-desc">Assessed/adopted rate of valuation</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{market_rate}}</mark>/- per Sq.mt.</td>
      </tr>
      <tr>
        <td class="col-num">6-</td>
        <td class="col-desc">Estimated value of land as per Guideline<br><mark class="hl">{{plot_area}}</mark> Sq.mt. @ <mark class="hl">{{gdl_rate}}</mark>/- per Sq.mt.</td>
        <td class="col-sep">:</td>
        <td class="col-val">Rs. <mark class="hl">{{land_gdv}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">7-</td>
        <td class="col-desc">Estimated value of land as per market<br><mark class="hl">{{plot_area}}</mark> Sq.mt. @ <mark class="hl">{{market_rate}}</mark>/- per Sq.mt.</td>
        <td class="col-sep">:</td>
        <td class="col-val">Rs. <mark class="hl">{{land_mv}}</mark></td>
      </tr>
    </table>

    <div class="sub-clause">
      <p style="margin-bottom: 8px;"><strong>I. Mention the valuation as per Govt. Approved rates also</strong></p>
      <p style="margin-bottom: 8px;"><strong>ii. In case of variation of 20% or more in the valuation proposed by the valuer and the Guideline value provided in the State Govt. notification</strong></p>
      <p style="margin-bottom: 12px; line-height: 1.5; text-align: justify;">
        The Market Value is higher than the Guideline Value due to the well-developed commercial locality and surrounding development.
      </p>
      <p style="margin-bottom: 8px;"><strong>iii) Details of last two transactions in the locality/ area to provided, if available: -</strong> Not Available</p>
      <p style="margin-bottom: 8px; line-height: 1.5; text-align: justify;">
        <strong>iv) Market Rate Consideration:</strong> The adopted market rate reflects the locational advantages of the property, its commercial use, front/main road accessibility, corner characteristics, surrounding development and prevailing market conditions in the locality..
      </p>
    </div>
  </div>

  <!-- ==================== PAGE 5: PART-B (VALUATION OF BUILDING) ==================== -->
  <div class="page">
    <div class="section-header">PART-B (Valuation of Building)</div>
    <div style="font-weight: bold; margin-bottom: 15px; font-size: 14px;">Technical details of the building</div>

    <table class="content-table">
      <tr>
        <td class="col-num">(a)</td>
        <td class="col-desc">Type of building (Residential/ Commercial /Industrial)</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{bld_type}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">(b)</td>
        <td class="col-desc">Type of Construction (Load bearing/RCC/ Steel Framed)</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{bld_construction}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">(c)</td>
        <td class="col-desc">Year of Construction</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{bld_year}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">(d)</td>
        <td class="col-desc">Number of floors & height of ach floor including basement, if any</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{bld_floors_height}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">(e)</td>
        <td class="col-desc">Plinth area floor-wise</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{bld_plinth_area}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">(f)</td>
        <td class="col-desc">Condition of the building<br>(i) Exterior-Excellent, Good, Normal, Poor<br>(ii) Interior-Excellent, Good, Normal, Poor</td>
        <td class="col-sep"><br>:<br>:</td>
        <td class="col-val"><br><mark class="hl">{{bld_ext_condition}}</mark><br><mark class="hl">{{bld_int_condition}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">g)</td>
        <td class="col-desc">Date of issue and validity of layout of approved map/plan</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{bld_layout_date}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">h)</td>
        <td class="col-desc">Approved map/plan issuing authority</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{bld_authority}}</mark></td>
      </tr>
      <tr>
        <td class="col-num">i)</td>
        <td class="col-desc">Whether genuineness or authenticity of approved map/plan is verified</td>
        <td class="col-sep">:</td>
        <td class="col-val"><mark class="hl">{{bld_authenticity}}</mark></td>
      </tr>
    </table>
  </div>

  <!-- ==================== PAGE 6: SPECIFICATIONS & CONSTRUCTION ==================== -->
  <div class="page">
    <div class="section-header">SPECIFICATION OF CONSTRUCTION (FLOOR-WISE)</div>

    <table class="content-table" style="font-size: 13px;">
      <tr>
        <td style="width: 4%;">1-</td>
        <td style="width: 46%;">Foundation</td>
        <td style="width: 4%;">:</td>
        <td style="width: 46%;">Yes</td>
      </tr>
      <tr>
        <td>2-</td>
        <td>Basement</td>
        <td>:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>3-</td>
        <td>Super Structure</td>
        <td>:</td>
        <td><mark class="hl">{{spec_superstructure}}</mark></td>
      </tr>
      <tr>
        <td>4-</td>
        <td>Joinery/ Doors & Windows (Please furnish details about size of frames, shutters, glazing, fitting etc., and specify the species of timber)</td>
        <td>:</td>
        <td><mark class="hl">{{spec_doors_windows}}</mark></td>
      </tr>
      <tr>
        <td>5-</td>
        <td>RCC Work</td>
        <td>:</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>6-</td>
        <td>Plastering</td>
        <td>:</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>7-</td>
        <td>Flooring, Skirting, dadoing</td>
        <td>:</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>8-</td>
        <td>Special finish as marble, granite, wooden, paneling, drills etc.</td>
        <td>:</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>9-</td>
        <td>Roofing including weather proof course</td>
        <td>:</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>10-</td>
        <td>Drainage</td>
        <td>:</td>
        <td>N.A.</td>
      </tr>
      <tr>
        <td>2-</td>
        <td>COMPOUND WALL<br>Height<br>Length<br>Type of Construction</td>
        <td>:<br>:<br>:<br>:</td>
        <td>N.A.<br>N.A.<br>N.A.<br>N.A.</td>
      </tr>
      <tr>
        <td>3-</td>
        <td>Electrical Installation :<br>Type of wiring<br>Class of fittings (Superior/Ordinary/Poor)<br>Number of Light Points<br>Fan Points<br>Spare plug Points<br>Any other item</td>
        <td><br>:<br>:<br>:<br>:<br>:<br>:</td>
        <td><br>Yes<br><mark class="hl">{{spec_elec_class}}</mark><br><mark class="hl">{{spec_elec_light}}</mark><br><mark class="hl">{{spec_elec_fan}}</mark><br><mark class="hl">{{spec_elec_plug}}</mark><br></td>
      </tr>
      <tr>
        <td>4-</td>
        <td>Plumbing Installation<br>a- No. of Water closets and their type<br>b- No. of wash basins<br>c- No. of Urinals<br>d- No. of bath Tubs<br>e- Water meters, taps etc.<br>f- Any other Fixtures</td>
        <td><br>:<br>:<br>:<br>:<br>:<br>:</td>
        <td><br><mark class="hl">{{spec_plumb_closets}}</mark><br><mark class="hl">{{spec_plumb_basins}}</mark><br><mark class="hl">{{spec_plumb_urinals}}</mark><br><mark class="hl">{{spec_plumb_tubs}}</mark><br><mark class="hl">{{spec_plumb_taps}}</mark><br><mark class="hl">{{spec_plumb_fixtures}}</mark></td>
      </tr>
    </table>

    <div class="section-header" style="margin-top: 15px;">B- Construction:</div>

    <table class="bordered-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Particulars of Item & Size</th>
          <th>Plinth Area Sqm approx.</th>
          <th>Roof Height approx</th>
          <th>Age of Building</th>
          <th>Estimated replacement rate of in Rs. Plinth area</th>
          <th>Replacement cost (in Rs.)</th>
          <th>Depr. (in %) & Year</th>
          <th>Net value after depre. (in Rs.)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center;">1-</td>
          <td>Ground Floor</td>
          <td style="text-align: center;"><mark class="hl">{{bld_plinth_val}}</mark></td>
          <td style="text-align: center;"><mark class="hl">{{bld_roof_height}}</mark></td>
          <td style="text-align: center;"><mark class="hl">{{bld_age}}</mark></td>
          <td style="text-align: center;"><mark class="hl">{{bld_rep_rate}}</mark></td>
          <td style="text-align: center;"><mark class="hl">{{bld_rep_cost}}</mark></td>
          <td style="text-align: center;"><mark class="hl">{{bld_depr_pct}}</mark></td>
          <td style="text-align: center;"><mark class="hl">{{mbld_vlu}}</mark></td>
        </tr>
        <tr style="font-weight: bold;">
          <td colspan="8" style="text-align: right; padding-right: 15px;">Total: -</td>
          <td style="text-align: center;"><mark class="hl">{{mbld_vlu}}</mark></td>
        </tr>
      </tbody>
    </table>

    <p style="font-size: 13px; line-height: 1.5; text-align: justify; margin-top: 15px;">
      The Government/Guideline value of the building has been calculated on the basis of a built-up area of <mark class="hl">{{bld_builtup_area}}</mark> Sq.mt. at the rate of Rs. <mark class="hl">{{bld_dlc_rate}}</mark>/- per Sq.mt., as per the <mark class="hl">{{bld_dlc_ref}}</mark>. The gross Government/Guideline value of the building is Rs. <mark class="hl">{{gbv}}</mark>/-. After considering applicable depreciation of 20%, the net Government/Guideline Value of the building is Rs. <mark class="hl">{{ngbv}}</mark>/- (Say Rs. <mark class="hl">{{ngbv_lacs}}</mark> Lacs).
    </p>
  </div>

  <!-- ==================== PAGE 7: ABSTRACT & CONCLUSION ==================== -->
  <div class="page">
    <div class="section-header">TOTAL ABSTRACT OF THE ENTIRE PROPERTY</div>

    <table style="width: 60%; margin-bottom: 12px; font-size: 13.5px; border-collapse: collapse;">
      <tr>
        <td style="width: 40%; padding: 3px 0;">PART-A Land</td>
        <td style="width: 5%;">:</td>
        <td style="width: 55%;">Rs. <mark class="hl">{{land_mv}}</mark></td>
      </tr>
      <tr>
        <td style="padding: 3px 0;">PART-B Building</td>
        <td>:</td>
        <td>Rs. <mark class="hl">{{mbld_vlu}}</mark></td>
      </tr>
      <tr>
        <td style="padding: 3px 0;">PART-C Extra items</td>
        <td>:</td>
        <td>0.00</td>
      </tr>
      <tr style="font-weight: bold;">
        <td style="padding: 4px 0;">Total: -</td>
        <td></td>
        <td>Rs. <mark class="hl">{{total_mv}}</mark></td>
      </tr>
      <tr style="font-weight: bold;">
        <td style="padding: 4px 0;">Or say</td>
        <td></td>
        <td>Rs. <mark class="hl">{{total_mv_say}}</mark></td>
      </tr>
    </table>

    <table class="bordered-table" style="width: 75%; margin-bottom: 20px;">
      <thead>
        <tr>
          <th>Component</th>
          <th>Guideline Value</th>
          <th>Market Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight: bold;">Land</td>
          <td style="text-align: center;"><mark class="hl">{{land_gdv}}</mark></td>
          <td style="text-align: center;"><mark class="hl">{{land_mv}}</mark></td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Building</td>
          <td style="text-align: center;"><mark class="hl">{{ngbv}}</mark></td>
          <td style="text-align: center;"><mark class="hl">{{mbld_vlu}}</mark></td>
        </tr>
        <tr style="font-weight: bold;">
          <td>Total</td>
          <td style="text-align: center;"><mark class="hl">{{total_gv}}</mark></td>
          <td style="text-align: center;"><mark class="hl">{{total_mv}}</mark></td>
        </tr>
      </tbody>
    </table>

    <div class="section-header">VALUATION SUMMARY AND CONCLUSION</div>

    <div style="font-size: 13.5px; line-height: 1.8;">
      <div>Govt Value of The Property is Rs. <mark class="hl">{{total_gv}}</mark> Say <strong>Rs <mark class="hl">{{total_gv_lacs}}</mark> Lacs</strong></div>
      <div>Market Value of the Property Rs. <mark class="hl">{{total_mv}}</mark> Say <strong>Rs. <mark class="hl">{{total_mv_lacs}}</mark> Lacs</strong></div>
      <div>Realizable Sale value of the Property</div>
      <div>Less by 5% I.e. Rs. <mark class="hl">{{realisable_value}}</mark>.00 Say <strong>Rs. <mark class="hl">{{realisable_value_lacs}}</mark> Lacs</strong></div>
      <div>Distress Sale value of the Property</div>
      <div>Less by 10% I.e. Rs. <mark class="hl">{{distress_value}}</mark> <strong>Rs <mark class="hl">{{distress_value_lacs}}</mark> Lacs</strong></div>
    </div>

    <div class="disclaimer-box">
      [<strong>Valuation Approach and Rationale:</strong> The land value has been assessed under the Market Approach, considering the property's location, commercial utility, road accessibility, corner/front-side characteristics, surrounding development and prevailing market conditions. The building value has been assessed on the basis of replacement cost with due consideration to its approximate age, present condition and applicable depreciation. The guideline value has been determined with reference to the applicable Sheopur DLC Calendar rates stated in this report.]
    </div>

    <div class="disclaimer-box" style="margin-top: 10px;">
      As a result of my appraisal and analysis it is my considered opinion that the present Distress Sale value of the above property in the prevailing condition with aforesaid specifications is<br>
      <strong>Rs <mark class="hl">{{distress_value_lacs}}</mark> Lacs (Rupees <mark class="hl">{{distress_value_in_words}}</mark> Only.)</strong>
    </div>

    <div class="signature-row" style="margin-top: 25px;">
      <div class="signature-left">
        <div>Place: Sheopur</div>
        <div style="margin-top: 6px;">Date: <mark class="hl">{{date}}</mark></div>
      </div>
      <div class="signature-right">
        <div class="signer-name">VIPIN NAGAR</div>
        <div>Registered Valuer,</div>
        <div>Regi. No. IBBI/11/2025/15927</div>
        <div>Chartered Engineer (India)</div>
      </div>
    </div>

    <div style="margin-top: 25px; font-size: 13px; line-height: 1.45; text-align: justify;">
      The undersigned have inspected the property detailed in the valuation report dated on <mark class="hl">{{date}}</mark> .I have gone through the report and am satisfied, to the best of my knowledge that the value of the property stated at <strong>Rs. <mark class="hl">{{distress_value_lacs}}</mark> Lacs</strong> by the registered valuer is realistic.
    </div>

    <div style="margin-top: 30px; text-align: right; line-height: 1.4;">
      <strong>The Manager</strong><br>
      Office -in-charge of Advance<br>
      Department
    </div>
  </div>

  <!-- ==================== PAGE 8: PHOTOSHEET 1 ==================== -->
  <div class="page">
    <div class="top-meta-row" style="margin-bottom: 15px;">
      <div>Sr No. <mark class="hl">{{report_no}}</mark></div>
      <div>Dated: <mark class="hl">{{date}}</mark></div>
    </div>

    <div class="section-header" style="text-align: left; margin-bottom: 20px;">PHOTOSHEET:-</div>

    <div class="photosheet-container">
      <div class="photo-frame">
        <img src="{{photo_1}}" alt="Property Valuation Inspection Photo 1" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80';" />
      </div>
    </div>
  </div>

  <!-- ==================== PAGE 9: PHOTOSHEET 2 ==================== -->
  <div class="page">
    <div class="top-meta-row" style="margin-bottom: 15px;">
      <div>Sr No. <mark class="hl">{{report_no}}</mark></div>
      <div>Dated: <mark class="hl">{{date}}</mark></div>
    </div>

    <div class="section-header" style="text-align: left; margin-bottom: 20px;">PHOTOSHEET:- (Continued)</div>

    <div class="photosheet-container">
      <div class="photo-frame">
        <img src="{{photo_2}}" alt="Property Valuation Inspection Photo 2" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80';" />
      </div>
    </div>
  </div>

  <!-- ==================== PAGE 10: DECLARATION & DISCLAIMER ==================== -->
  <div class="page">
    <div class="section-header">DECLARATION</div>

    <div style="font-size: 13.5px; line-height: 1.5; text-align: justify; margin-bottom: 20px;">
      <p style="margin-bottom: 8px;">I hereby declare that:</p>
      <p style="margin-bottom: 8px;">a) The information furnished in this valuation report is true and correct to the best of my knowledge and belief, and I have made an impartial and unbiased valuation of the property.</p>
      <p style="margin-bottom: 8px;">b) I have no direct or indirect interest in the property valued.</p>
      <p style="margin-bottom: 8px;">c) I have personally inspected the property on <mark class="hl">{{date_of_inspection}}</mark>.</p>
      <p style="margin-bottom: 8px;">d) The valuation has been carried out based on the data, documents, and information provided to me by the owner/applicant.</p>
      <p style="margin-bottom: 8px;">e) This report does not include verification of ownership, title, encumbrances, statutory approvals, or legal compliance of the property.</p>
      <p style="margin-bottom: 8px;">f) The particulars and details contained in this report are based on information supplied by the owner(s)/applicant(s).</p>
      <p style="margin-bottom: 8px;">g) This report shall not be used for any purpose other than the purpose stated herein.</p>
      <p style="margin-bottom: 8px;">h) The valuation expressed in this report is an opinion based on available information, assumptions, market conditions, and professional judgment. It does not constitute any legal or contractual obligation on my part.</p>
      <p style="margin-bottom: 8px;">i) I shall not be held responsible if the property is already mortgaged, charged, encumbered, or otherwise used as security for any loan or obligation.</p>
    </div>

    <div class="section-header" style="border-bottom: 1.5px solid #000; padding-bottom: 4px; margin-top: 25px;">DISCLAIMER</div>

    <div style="font-size: 13px; line-height: 1.5; text-align: justify; margin-top: 15px;">
      <p style="margin-bottom: 10px;">
        The value of the property is influenced by various factors including economic conditions, market trends, prevailing laws and regulations, local by-laws, and demand-supply dynamics. Accordingly, the value assessed herein may vary with changes in any of these factors.
      </p>
      <p style="margin-bottom: 10px;">
        The valuation stated in this report reflects the prevailing market conditions as on the date of valuation and is intended solely for the purpose for which it has been prepared. Any use of this report for any other purpose shall be entirely at the risk of the user.
      </p>
      <p style="margin-bottom: 10px;">
        Valuation is based on documents and information made available to the valuer and physical inspection of the property. Title, ownership, encumbrances, statutory approvals and legal compliance have not been independently verified unless specifically stated.
      </p>
      <p style="margin-bottom: 10px;">
        A&V Valuation and Consultancy Service and its partners shall not be liable for any loss, damage, or consequences arising from any unauthorized, improper, or unintended use of this valuation report.
      </p>
    </div>

    <div class="signature-row" style="margin-top: 35px;">
      <div class="signature-left">
        <div>Place: Sheopur</div>
        <div style="margin-top: 8px;">Date: <mark class="hl">{{date}}</mark></div>
      </div>
      <div class="signature-right">
        <div class="signer-name">VIPIN NAGAR</div>
        <div>Registered Valuer,</div>
        <div>Regi. No. IBBI/11/2025/15927</div>
        <div>Chartered Engineer (India)</div>
      </div>
    </div>
  </div>

</body>
</html>`
};

module.exports = valuationReportTemplate;


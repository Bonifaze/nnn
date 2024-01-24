<!doctype html>
<html lang="en" dir="ltr" class="no-js">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=2.0 user-scalable=yes" />

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="shortcut icon" href="public/image/favicon.png" />

    <link rel="canonical" href="index.php" />
    <link rel="shortlink" href="index.php" />

    <title>Veritas University Abuja</title>
    <?php include('./layouts/head.php'); ?>


    <!-- === Remix Icons ===  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.css" crossorigin="" />

    <!-- === Swiper CSS === -->
    <link rel="stylesheet" href="./assets/css/swiper-bundle-min.css" />

    <!-- === CSS === -->
    <link rel="stylesheet" href="./assets/css/style.css" />


</head>

<body style="background-color: white;" class="front not-logged-in no-sidebars page-node page-node- page-node-1110 node-type-oxweb-homepage domain-oxweb no-sidebar-first vid-9385296">
    <div id="skip-link">
        <a href="#main-content" class="element-invisible element-focusable skip-to-content">Skip to main content</a>
    </div>

    <noscript aria-hidden="true"><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDB29T" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <section id="visible-body" class="visible-body">

        <!-- HEADER SECTIONS -->

        <?php include('./layouts/header.php'); ?>
        <!-- HEADERS SECTION ENDS  -->
        <section id="page-content" class="page-level page-content">
            <div class="wrapper">
                <div class="row space-header">


                    <section class="page-content-level column page-content-main" id="page-content-main">
                        <section class="page-content-container main-content" id="main-content">

                            <div about="#" typeof="sioc:Item foaf:Document" class="ds-1col node node-oxweb-homepage view-mode-full clearfix">

                                <!-- SLIDER SECTION  -->
                                
                                <?php include('./home/slidersection.php'); ?>


                                <!-- SLIDER SECTION ENDS  -->
                                <!-- NEWS AND EVENTS SECTION  -->
                                
                                
                                <?php include('./home/newssection.php'); ?>


                                <!-- NEWS AND EVENTS SECTION  ends -->

                                <!-- STUDY SECTION -->
                            
                                <?php include('./home/studysection.php'); ?>



                                <!-- STUDY SECTION ends -->

                                <!-- Course Finder Section -->
                                <?php include('./home/findersection.php'); ?>
                                



                                <!-- Course Finder Section ends -->
                                <!-- EXPLORE VERITAS  -->
                                <?php include('./home/exploresection.php'); ?>


                                <!-- EXPLORE VERITAS ends  -->


                            </div>
                        </section>

                    </section>
                </div>
            </div>
        </section>
        <!-- FOOTER SECTIONS  -->
        <?php include('./layouts/footer.php'); ?>
        
    </section>

    <!-- === Swiper JS === -->
    <script src="./assets/js/swiper-bundle-min.js"></script>

    <!-- === Script === -->
    <script src="./assets/js/script.js"></script>

</body>


</html>
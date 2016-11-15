User.create!([
  {username: "Guest", password_digest: "$2a$10$8eEOy7TjNKvdbIIbaHn/oeHJZQeiV/spmYFdIBScR4Ul8evqTjfB.", session_token: "z8t7x_8m4lMonFwYh2mC33bfJnrokDOr8QaqBCZuT_A", profile_pic_url: nil, description: nil},
  {username: "Blank Banshee", password_digest: "$2a$10$6pbsz1dWhlogZQfDzDoVkuTPDGbxjdoud3IrCkgQThmWhAboiAeIu", session_token: "gN42l0Owq0nBbQyzxBff1q51vYI7bNXir6t1to5bNsc", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478900182/Blank_Banshee_-_Blank_Banshee_0_-_0_ME_qydvxh.png", description: nil},
  {username: "Carpenter Brut", password_digest: "$2a$10$yEG5JUyGeFYruOlwHAiPb.hwV1K1BPCi3buvVTQlmsuroSQgI6zRO", session_token: "56_zsi8Si3so1Dup4EKEl3PLzrFvQ3gDIj5knckO4mc", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478901863/avatars-000210102032-fu0ohl-t500x500_mjn85n.jpg", description: nil},
  {username: "Ifing", password_digest: "$2a$10$wTqmvoJQ91guNCObQgxUw.nxsKE6jm50sz75NrdpbPSJjDHcdNEcW", session_token: "BmZlcnGqBLeHKwOKKSumbPp03DfSYO1fpnJ_LWoWcuM", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478905448/logo_lflhif.jpg", description: nil},
  {username: "Kauan", password_digest: "$2a$10$kaYf8PGQBxJurJ.R6q3wDOluWKBhPlngO1dEc2h0cee3.gDcFDcQ6", session_token: "y-tXm22aR9KOv4iR8xoMAsa3NEypfHtLrRfJqoGwNKk", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/c_crop,h_400,w_400/v1478905511/102515_photo_pqn9yy.jpg", description: nil},
  {username: "PERTURBATOR", password_digest: "$2a$10$39KFqnCvWTctRx8496n9JOx2KiVwkaVY4WcdFCi0eBW0oCuiB3mI.", session_token: "q8me9zBa1HLGGngi7fF1TGE7_V1KCILMcxzmXP02nUs", profile_pic_url: nil, description: nil},
  {username: "Tommy '86", password_digest: "$2a$10$SZFKDFuUHYsqNLjrprkuduwd1hXJd./5hLF3hYQHj/utvw73VzQZi", session_token: "XAhMve_mM_SgKUu43AUXaAq9e_ZUZMWNvuayOD9apeo", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478905632/0006337509_10_mv6fjd.jpg", description: nil},
  {username: "V A P E R R O R", password_digest: "$2a$10$FhlVTl.FHVARe3e4GWYz9.yLXn5DARPc7/l2i3qzaWai107PZxTkq", session_token: "iFC3jHWUesIQYefFGgPCjoM8bs6j8x5hswvdDE8u4cQ", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478905684/0004216439_10_yx10ms.jpg", description: nil},
  {username: "GOST", password_digest: "$2a$10$2gdO4nuA2hBdtOc7Fslf1ujSMiI8j5kCkpjcVrG8gTNDj1RSMs9q6", session_token: "Dyj4SQbVudcV3mUh2jP1HvsWD36-clq03qnPKg2F17U", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478904802/cover_czxc4x.jpg", description: nil},
  {username: "Dynatron", password_digest: "$2a$10$hglth6DaVnmQCSFlxsQH0.Vjf69M54xQbanPxq5bIKol7j06uI1em", session_token: "sYyvthSL4cs-QgSKNyn3xQepMIN2l-UVDs98vkmPc-c", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478905389/dynatron-logo_cebhjy.jpg", description: nil},
  {username: "Macintosh Plus", password_digest: "$2a$10$oWcsQIgRDVWXVSMRCPcWjuxjzr2DynP9agPEBd7pstOolu.lor2f2", session_token: "kIR6rsIi1hrqIVI4nN_YJo2nQ3WlBAzJPW_uiYBUCeQ", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478905340/Floral_Shoppe_Alt_Cover_mijqx0.jpg", description: nil},
  {username: "Setentia", password_digest: "$2a$10$vDLLNCtoQmCdOmqACYuIx.sy53FKslysC3XHjihf5.Z5pyYmng5aO", session_token: "0lMhgIVIcHoFTY9C08CuqAd6Xadpb4dSLk-Li31_FJw", profile_pic_url: nil, description: nil},
  {username: "ALEX", password_digest: "$2a$10$Y9IewnqQVUjIKXnYHgy.CelxrJPZkejgcd3pm1xbmDulmJHowfjcO", session_token: "d3Pl_-TgwZmzkn2ipnxIIW1nhRkBSjfaE4lEWrlMg6M", profile_pic_url: "http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478898921/cover_be6a6g.jpg", description: nil}
])

Album.create!([user_id:13,
              title:"Blood Club",
              cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478898921/cover_be6a6g.jpg",
              description: ""])
Album.create!([user_id:2,
              title:"Blank Banshee 0",
              cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478900183/Blank_Banshee_-_Blank_Banshee_0_-_cover_q5bocf.png",
              description: ""])
Album.create!([user_id:3,
              title:"EP I",
              cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478901866/cover_yf7usw.jpg",
              description: ""])
Album.create!([user_id:9,
              title:"Non Paradisi",
              cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478901871/cover_xwkotl.jpg",
              description: ""])
Album.create!([user_id:4,
              title:"Against the Weald",
              cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478901979/cover_vjghmf.jpg",
              description: ""])
Album.create!([user_id:5,
              title:"Sorni Nai",
              cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478902437/cover_oxkqh9.jpg",
              description: ""])
Album.create!([user_id:7,
              title:"Transhumanism",
              cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478902733/cover_wkujcs.jpg",
              description: ""])
Album.create!([user_id:8,
              title:"System Delight",
              cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478903252/VAPERROR_-_System_Delight_-_cover_vqf1yr.png",
              description: ""])
Album.create!([user_id:10,
              title:"Escape Velocity",
              cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478903919/cover_vvzcdr.jpg",
              description: ""])
Album.create!([user_id:9,
                title:"Behemoth",
                cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478904802/cover_czxc4x.jpg",
                description: ""])
Album.create!([user_id:11,
                title:"Floral Shoppe",
                cover_url:"http://res.cloudinary.com/dxtvmwxxb/image/upload/v1478905340/Floral_Shoppe_Alt_Cover_mijqx0.jpg",
                description: ""])

Track.create!([title:"海底",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904888/Macintosh_Plus_-_Floral_Shoppe_-_11_%E6%B5%B7%E5%BA%95_anev8i.mp3",
               album_id: 11,
               track_number: 11])
Track.create!([title:"月",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904897/Macintosh_Plus_-_Floral_Shoppe_-_11_%E6%9C%88_llf7lk.mp3",
               album_id: 11,
               track_number: 10])
Track.create!([title:"て",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904881/Macintosh_Plus_-_Floral_Shoppe_-_09_%E3%81%A6_mn4r4n.mp3",
               album_id: 11,
               track_number: 9])
Track.create!([title:"外ギン Aviation",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904871/Macintosh_Plus_-_Floral_Shoppe_-_08_%E5%A4%96%E3%82%AE%E3%83%B3_Aviation_pkqbwo.mp3",
               album_id: 11,
               track_number: 8])
Track.create!([title:"数学",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904894/Macintosh_Plus_-_Floral_Shoppe_-_07_%E6%95%B0%E5%AD%A6_wrozsr.mp3",
               album_id: 11,
               track_number: 7])
Track.create!([title:"ECCOと悪寒ダイビング",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904890/Macintosh_Plus_-_Floral_Shoppe_-_06_ECCO%E3%81%A8%E6%82%AA%E5%AF%92%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0_jyr8hb.mp3",
               album_id: 11,
               track_number: 6])
Track.create!([title:"地理",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904870/Macintosh_Plus_-_Floral_Shoppe_-_05_%E5%9C%B0%E7%90%86_fuhmre.mp3",
               album_id: 11,
               track_number: 5])
Track.create!([title:"ライブラリ",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904858/Macintosh_Plus_-_Floral_Shoppe_-_04_%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA_mesndn.mp3",
               album_id: 11,
               track_number: 4])
Track.create!([title:"花の専門店",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904866/Macintosh_Plus_-_Floral_Shoppe_-_03_%E8%8A%B1%E3%81%AE%E5%B0%82%E9%96%80%E5%BA%97_oyfvko.mp3",
               album_id: 11,
               track_number: 3])
Track.create!([title:"リサフランク420 / 現代のコンピュー",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904893/Macintosh_Plus_-_Floral_Shoppe_-_02_%E3%83%AA%E3%82%B5%E3%83%95%E3%83%A9%E3%83%B3%E3%82%AF420_-_%E7%8F%BE%E4%BB%A3%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC_ov2vp3.mp3",
               album_id: 11,
               track_number: 2])
Track.create!([title:"ブート",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904863/Macintosh_Plus_-_Floral_Shoppe_-_01_%E3%83%96%E3%83%BC%E3%83%88_bu8ssp.mp3",
               album_id: 11,
               track_number: 1])
Track.create!([title:"Behemoth (PERTURBATOR Remix)",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904374/GosT_-_Behemoth_-_13_Behemoth_Perturbator_remix_nyxuyy.mp3",
               album_id: 10,
               track_number: 13])
Track.create!([title:"Reign in Hell (Dance with the Dead Remix)",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904372/GosT_-_Behemoth_-_12_Reign_in_Hell_Dance_with_the_Dead_remix_u9vvqa.mp3",
               album_id: 10,
               track_number: 12])
Track.create!([title:"Behemoth",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904372/GosT_-_Behemoth_-_11_Behemoth_gd4sgm.mp3",
               album_id: 10,
               track_number: 11])
Track.create!([title:"Sacrament",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904350/GosT_-_Behemoth_-_10_Sacrament_ffk7rg.mp3",
               album_id: 10,
               track_number: 10])
Track.create!([title:"Bathory Bitch",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904372/GosT_-_Behemoth_-_09_Bathory_Bitch_ltskbt.mp3",
               album_id: 10,
               track_number: 9])
Track.create!([title:"Ripper",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904362/GosT_-_Behemoth_-_08_Ripper_p2fgmn.mp3",
               album_id: 10,
               track_number: 8])
Track.create!([title:"Without a Trace (feat. Hayley Stewart)",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904353/GosT_-_Behemoth_-_07_Without_a_Trace_feat._Hayley_Stewart_wztbeq.mp3",
               album_id: 10,
               track_number: 7])
Track.create!([title:"Tongue",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904357/GosT_-_Behemoth_-_06_Tongue_umek2j.mp3",
               album_id: 10,
               track_number: 6])
Track.create!([title:"Reign in Hell",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904333/GosT_-_Behemoth_-_05_Reign_in_Hell_bvhmrb.mp3",
               album_id: 10,
               track_number: 5])
Track.create!([title:"Master",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904342/GosT_-_Behemoth_-_04_Master_wv1cwz.mp3",
               album_id: 10,
               track_number: 4])
Track.create!([title:"Night Crawler",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904348/GosT_-_Behemoth_-_03_Night_Crawler_hsuguo.mp3",
               album_id: 10,
               track_number: 3])
Track.create!([title:"Genesee Avenue",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904340/GosT_-_Behemoth_-_02_Genesee_Avenue_qxxdlz.mp3",
               album_id: 10,
               track_number: 2])
Track.create!([title:"Beyond",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904323/GosT_-_Behemoth_-_01_Beyond_cnoclh.mp3",
               album_id: 10,
               track_number: 1])
Track.create!([title:"Wormhole",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904034/Dynatron_-_Escape_Velocity_-_09_Wormhole_d7sofj.mp3",
               album_id: 9,
               track_number: 9])
Track.create!([title:"Pulse Power",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904036/Dynatron_-_Escape_Velocity_-_08_Pulse_Power_ywezhk.mp3",
               album_id: 9,
               track_number: 8])
Track.create!([title:"Andromeda Bleeding",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904032/Dynatron_-_Escape_Velocity_-_07_Andromeda_Bleeding_udfput.mp3",
               album_id: 9,
               track_number: 7])
Track.create!([title:"The Pulsating Nebula",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904025/Dynatron_-_Escape_Velocity_-_06_The_Pulsating_Nebula_qfxxkd.mp3",
               album_id: 9,
               track_number: 6])
Track.create!([title:"Vox Magnetismi",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904005/Dynatron_-_Escape_Velocity_-_05_Vox_Magnetismi_ys46ds.mp3",
               album_id: 9,
               track_number: 5])
Track.create!([title:"Aurora Nights",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904028/Dynatron_-_Escape_Velocity_-_04_Aurora_Nights_zpxg9z.mp3",
               album_id: 9,
               track_number: 4])
Track.create!([title:"Propulsion Overdrive",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904016/Dynatron_-_Escape_Velocity_-_03_Propulsion_Overdrive_tc3w76.mp3",
               album_id: 9,
               track_number: 3])
Track.create!([title:"Fireburner",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904010/Dynatron_-_Escape_Velocity_-_02_Fireburner_qrliyd.mp3",
               album_id: 9,
               track_number: 2])
Track.create!([title:"Space Operators",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478904011/Dynatron_-_Escape_Velocity_-_01_Space_Operators_ctpdbr.mp3",
               album_id: 9,
               track_number: 1])
Track.create!([title:"Sweet Delete",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903814/VAPERROR_-_System_Delight_-_14_Sweet_Delete_aigoxc.mp3",
               album_id: 8,
               track_number: 14])
Track.create!([title:"Perfect Circuit",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903253/VAPERROR_-_System_Delight_-_13_Perfect_Circuit_-Night_Drive-_uyncrb.mp3",
               album_id: 8,
               track_number: 13])
Track.create!([title:"Lightyear Luvrs",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903249/VAPERROR_-_System_Delight_-_12_Lightyear_Luvrs_nhmysw.mp3",
               album_id: 8,
               track_number: 12])
Track.create!([title:"DX PLASTIX",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903658/VAPERROR_-_System_Delight_-_11_DX_PLASTIX_qvxbgf.mp3",
               album_id: 8,
               track_number: 11])
Track.create!([title:"K-Gem",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903249/VAPERROR_-_System_Delight_-_10_K-Gem_ghzh4b.mp3",
               album_id: 8,
               track_number: 10])
Track.create!([title:"Respirator Memory",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903249/VAPERROR_-_System_Delight_-_09_Respirator_Memory_ntdtpb.mp3",
               album_id: 8,
               track_number: 9])
Track.create!([title:"film E.up",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903247/VAPERROR_-_System_Delight_-_08_film_E.up_dcdkxr.mp3",
               album_id: 8,
               track_number: 8])
Track.create!([title:"DATAMASHA",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903236/VAPERROR_-_System_Delight_-_07_DATAMASHA_uh21gu.mp3",
               album_id: 8,
               track_number: 7])
Track.create!([title:"openMe",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903230/VAPERROR_-_System_Delight_-_06_openME.up_mjnzlk.mp3",
               album_id: 8,
               track_number: 6])
Track.create!([title:"Loney Planet",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903232/VAPERROR_-_System_Delight_-_05_Lonely_Planet_tieota.mp3",
               album_id: 8,
               track_number: 5])
Track.create!([title:"SoftNet",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903233/VAPERROR_-_System_Delight_-_04_SoftNet_fjkhgl.mp3",
               album_id: 8,
               track_number: 4])
Track.create!([title:"sentienceKEYS",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903236/VAPERROR_-_System_Delight_-_03_sentienceKEYS_xb49k3.mp3",
               album_id: 8,
               track_number: 3])
Track.create!([title:"2ND FX",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903226/VAPERROR_-_System_Delight_-_02_2ND_FX_rdmxj1.mp3",
               album_id: 8,
               track_number: 2])
Track.create!([title:"Welcome To System Delight",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478903220/VAPERROR_-_System_Delight_-_01_Welcome_To_System_Delight_qbju51.mp3",
               album_id: 8,
               track_number: 1])
Track.create!([title:"Transhumanism",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902825/Tommy_86_-_Transhumanism_-_12_Transhumanism_f6pxfy.mp3",
               album_id: 7,
               track_number: 12])
Track.create!([title:"No Man's Earth",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902814/Tommy_86_-_Transhumanism_-_11_No_Man_s_Earth_j0o9r8.mp3",
               album_id: 7,
               track_number: 11])
Track.create!([title:"The Shutdown of Humanity",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902823/Tommy_86_-_Transhumanism_-_10_The_Shutdown_of_Humanity_lgbobr.mp3",
               album_id: 7,
               track_number: 10])
Track.create!([title:"The Last Judgment",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902811/Tommy_86_-_Transhumanism_-_09_The_Last_Judgment_bkwlpw.mp3",
               album_id: 7,
               track_number: 9])
Track.create!([title:"A.I. Takeover",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902817/Tommy_86_-_Transhumanism_-_08_A.I._Takeover_bhftus.mp3",
               album_id: 7,
               track_number: 8])
Track.create!([title:"Doppelgänger",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902813/Tommy_86_-_Transhumanism_-_07_Doppelg%C3%A4nger_yn0box.mp3",
               album_id: 7,
               track_number: 7])
Track.create!([title:"Command and Control",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902792/Tommy_86_-_Transhumanism_-_06_Command_and_Control_v7b4iy.mp3",
               album_id: 7,
               track_number: 6])
Track.create!([title:"L.V.T.H.N. Central Unit",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902801/Tommy_86_-_Transhumanism_-_05_L.V.T.H.N._Central_Unit_pddzxi.mp3",
               album_id: 7,
               track_number: 5])
Track.create!([title:"Animus and Assimilation",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902787/Tommy_86_-_Transhumanism_-_04_Animus_and_Assimilation_x1cc7d.mp3",
               album_id: 7,
               track_number: 4])
Track.create!([title:"Sequential Slavery",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902792/Tommy_86_-_Transhumanism_-_03_Sequential_Slavery_feat._Dan_Terminus_dy4nxq.mp3",
               album_id: 7,
               track_number: 3])
Track.create!([title:"Citymulation (feat. PERTURBATOR)",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902786/Tommy_86_-_Transhumanism_-_02_Citymulation_feat._Perturbator_jxcoog.mp3",
               album_id: 7,
               track_number: 2])
Track.create!([title:"The Rise",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902770/Tommy_86_-_Transhumanism_-_01_The_Rise_bi5naj.mp3",
               album_id: 7,
               track_number: 1])
Track.create!([title:"sat",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902493/Kauan_-_Sorni_Nai_-_07_sat_bb2hii.mp3",
               album_id: 6,
               track_number: 7])
Track.create!([title:"khot",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902511/Kauan_-_Sorni_Nai_-_06_khot_o7trel.mp3",
               album_id: 6,
               track_number: 6])
Track.create!([title:"at",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902494/Kauan_-_Sorni_Nai_-_05_at_uxntl4.mp3",
               album_id: 6,
               track_number: 5])
Track.create!([title:"nila",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902496/Kauan_-_Sorni_Nai_-_04_nila_h9ytob.mp3",
               album_id: 6,
               track_number: 4])
Track.create!([title:"khurum",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902500/Kauan_-_Sorni_Nai_-_03_khurum_k6wc43.mp3",
               album_id: 6,
               track_number: 3])
Track.create!([title:"kit",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902498/Kauan_-_Sorni_Nai_-_02_kit_bjnuxr.mp3",
               album_id: 6,
               track_number: 2])
Track.create!([title:"akva",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902493/Kauan_-_Sorni_Nai_-_01_akva_hxuekv.mp3",
               album_id: 6,
               track_number: 1])
Track.create!([title:"Realms Forged",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902030/Ifing_-_Against_This_Weald_-_03_Realms_Forged_zy1gmk.mp3",
               album_id: 5,
               track_number: 3])
Track.create!([title:"The Stream",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902016/Ifing_-_Against_This_Weald_-_02_The_Stream_iupkqs.mp3",
               album_id: 5,
               track_number: 2])
Track.create!([title:"The Sires Beyond Await",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478901997/Ifing_-_Against_This_Weald_-_01_The_Sires_Beyond_Await_zx59le.mp3",
               album_id: 5,
               track_number: 1])
Track.create!([title:"Sacrament Extended",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478902171/GosT_-_Non_Paradisi_Secret_Arcana_-_06_Sacrament_Extended_qnrjo7.mp3",
               album_id: 4,
               track_number: 6])
Track.create!([title:"Reign in Hell",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478901854/GosT_-_Non_Paradisi_Secret_Arcana_-_05_Reign_in_Hell_Extended_zjjxli.mp3",
               album_id: 4,
               track_number: 5])
Track.create!([title:"Voces",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478901855/GosT_-_Non_Paradisi_Secret_Arcana_-_04_Voces_zur7hr.mp3",
               album_id: 4,
               track_number: 4])
Track.create!([title:"Amy's Wager",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478901855/GosT_-_Non_Paradisi_Secret_Arcana_-_03_Amy_s_Wager_jfoz8i.mp3",
               album_id: 4,
               track_number: 3])
Track.create!([title:"Prepotency",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478901850/GosT_-_Non_Paradisi_Secret_Arcana_-_02_Prepotency_ugojwi.mp3",
               album_id: 4,
               track_number: 2])
Track.create!([title:"Through Thine Eyes",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478901847/GosT_-_Non_Paradisi_Secret_Arcana_-_01_Through_Thine_Eyes_ni7szf.mp3",
               album_id: 4,
               track_number: 1])
Track.create!([title:"Le Perv",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478900632/Carpenter_Brut_-_EP_I_-_06_Le_Perv_hyukvk.mp3",
               album_id: 3,
               track_number: 6])
Track.create!([title:"Midnight Demons",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478900784/Carpenter_Brut_-_EP_I_-_05_347_Midnight_Demons_gqwraq.mp3",
               album_id: 3,
               track_number: 5])
Track.create!([title:"Wake Up The President",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478900737/Carpenter_Brut_-_EP_I_-_04_Wake_Up_The_President_pydy6u.mp3",
               album_id: 3,
               track_number: 4])
Track.create!([title:"L.A. Venice Bitch",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478900714/Carpenter_Brut_-_EP_I_-_03_L.A_Venice_Bitch_80_s_hkgwwk.mp3",
               album_id: 3,
               track_number: 3])
Track.create!([title:"Disco Zombie Italia",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478900764/Carpenter_Brut_-_EP_I_-_02_Disco_Zombi_Italia_niikab.mp3",
               album_id: 3,
               track_number: 2])
Track.create!([title:"Escape From Midwitch Valley",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478900805/Carpenter_Brut_-_EP_I_-_01_Escape_From_Midwitch_Valley_yx2h2t.mp3",
               album_id: 3,
               track_number: 1])
Track.create!([title:"Shut down-Depression",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899333/Blank_Banshee_-_Blank_Banshee_0_-_15_B-_Shut_down-Depression_flx5qz.mp3",
               album_id: 2,
               track_number: 15])
Track.create!([title:"World Vision",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899245/Blank_Banshee_-_Blank_Banshee_0_-_14_World_Vision_ojy2sv.mp3",
               album_id: 2,
               track_number: 14])
Track.create!([title:"Visualization",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899247/Blank_Banshee_-_Blank_Banshee_0_-_13_Visualization_sro2c4.mp3",
               album_id: 2,
               track_number: 13])
Track.create!([title:"Purity Boys",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899788/Blank_Banshee_-_Blank_Banshee_0_-_12_Purity_Boys_fpkpea.mp3",
               album_id: 2,
               track_number: 12])
Track.create!([title:"Teen Pregnancy",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899806/Blank_Banshee_-_Blank_Banshee_0_-_11_Teen_Pregnancy_zxzxrl.mp3",
               album_id: 2,
               track_number: 11])
Track.create!([title:"CyberZodiac",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899790/Blank_Banshee_-_Blank_Banshee_0_-_10_Cyber_Zodiac_ksfku8.mp3",
               album_id: 2,
               track_number: 10])
Track.create!([title:"Dreamcast",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899792/Blank_Banshee_-_Blank_Banshee_0_-_09_Dreamcast_kdkpz3.mp3",
               album_id: 2,
               track_number: 9])
Track.create!([title:"Deep Space",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899771/Blank_Banshee_-_Blank_Banshee_0_-_08_Deep_Space_foayrg.mp3",
               album_id: 2,
               track_number: 8])
Track.create!([title:"Photosynthesis",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899714/Blank_Banshee_-_Blank_Banshee_0_-_07_Photosynthesis_hcr7e9.mp3",
               album_id: 2,
               track_number: 7])
Track.create!([title:"Hyper Object",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899596/Blank_Banshee_-_Blank_Banshee_0_-_06_Hyper_Object_mja7ag.mp3",
               album_id: 2,
               track_number: 6])
Track.create!([title:"Venus Death Trap",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899560/Blank_Banshee_-_Blank_Banshee_0_-_05_Venus_Death_Trap_lgnjhn.mp3",
               album_id: 2,
               track_number: 5])
Track.create!([title:"Ammonia Clouds",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899599/Blank_Banshee_-_Blank_Banshee_0_-_04_Ammonia_Clouds_rsvyqj.mp3",
               album_id: 2,
               track_number: 4])
Track.create!([title:"Bathsalts",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899618/Blank_Banshee_-_Blank_Banshee_0_-_03_Bathsalts_zcib4r.mp3",
               album_id: 2,
               track_number: 3])
Track.create!([title:"Wavestep",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899606/Blank_Banshee_-_Blank_Banshee_0_-_02_Wavestep_wtjfvd.mp3",
               album_id: 2,
               track_number: 2])
Track.create!([title:"B/ Start Up",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478899437/Blank_Banshee_-_Blank_Banshee_0_-_01_B-_Start_Up_xdelr7.mp3",
               album_id: 2,
               track_number: 1])
Track.create!([title:"Resurrection",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478892355/ALEX_-_Blood_Club_-_01_Resurrection_ztn9ju.mp3",
               album_id: 1,
               track_number: 1])
Track.create!([title:"Occult",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478892570/ALEX_-_Blood_Club_-_02_Occult_gzzv5u.mp3",
               album_id: 1,
               track_number: 2])
Track.create!([title:"Black",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478892519/ALEX_-_Blood_Club_-_03_Black_Magic_lajj9q.mp3",
               album_id: 1,
               track_number: 3])
Track.create!([title:"Blood Club",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478892560/ALEX_-_Blood_Club_-_04_Blood_Club_fldggu.mp3",
               album_id: 1,
               track_number: 4])
Track.create!([title:"Naturom Demonto",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478892565/ALEX_-_Blood_Club_-_05_Naturom_Demonto_sfgmen.mp3",
               album_id: 1,
               track_number: 5])
Track.create!([title:"Demons",
               track_url:"http://res.cloudinary.com/dxtvmwxxb/video/upload/v1478892565/ALEX_-_Blood_Club_-_06_Demons_uv8rgs.mp3",
               album_id: 1,
               track_number: 6])

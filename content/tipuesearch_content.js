var tipuesearch = {"pages": [{'title': 'About', 'text': '\n \n \n 學號\xa0 \xa0 \xa0 \xa0\xa0\xa0 \n 姓名 \xa0 \n github\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0\xa0 \n ip \n \n \n 40732331 \n 黃政憲 \n a40732331 \n http://[2001:288:6004:17:2023:cdb:7:1]:23020 \n \n \n 41023213 \n 張義聖 \n 41023213 \n http://[2001:288:6004:17:2023:cdb:7:2]:23020 \n \n \n 41023216 \n 郭宥辰 \n 41023216 \n http://[2001:288:6004:17:2023:cdb:7:3]:23020 \n \n \n 41023218  \n 陳岳檉 \n snowfall-killer \n http://[2001:288:6004:17:2023:cdb:7:4]:23020 \n \n \n 41023225 \n 陳威成 \n xiaomantou0411 \n http://[2001:288:6004:17:2023:cdb:7:5]:23020 \n \n \n 41023237 \n 黃祈瑋\xa0 \n www000123 \n \n http://[2001:288:6004:17:2023:cdb:7:6]:23020 \n \n \n \n 41023245 \n 劉于綸 \n 41023245 \n \n http://[2001:288:6004:17:2023:cdb:7:7]:23020 \n \n \n \n 41023248 \n 蔡弦霖\xa0 \n smart-777\xa0 \n \n http://[2001:288:6004:17:2023:cdb:7:8]:23020 \n \n \n \n \n \n 倉儲:  https://github.com/mdecd2023/2b3-pj3bg7 \n 網站:  https://mdecd2023.github.io/2b3-pj3bg7/content/index.html \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'group', 'text': '\n 列出全班各學員 resume, football, pj1, pj2, pj3 等五個倉儲的靜態網站與倉儲連結 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  亂數  \n \n \n  亂數  結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'group.html'}, {'title': 'pj3', 'text': '工作分配 \n 41023213\xa0 繪圖 \xa0 \xa0 \n 41023216\xa0 ppt pdf \xa0 輔助繪圖 \n 41023218 \xa0網站維護和輔助程式設計 \n 41023225 \xa0 ppt \xa0 pdf \xa0 輔助繪圖 \n 41023237 \xa0\xa0記 分板程式和車子程式 \n 41023245 機器人與場地 設計及維護 \n 41023248  機器人與場地 設計 及維護 \n 40732337\xa0 繪圖 \n ------------------------------------------------------------------------------------------------------- \n 1.場地設計 \n 場地尺寸 : 長 4m x 寬 2.5m \n 球門尺寸 : 長 0.6m, 高 0.3m, 寬 0.1m \n 足球規格 : 白色, 直徑 0.1m, 重量 0.5kg \n \n \n 2.玩家設計與理念 \n \n 外觀的設計比較簡單使用原本泡泡機器人的本體，我們更多的是在功能性的改良，上方的槌子可以自由操控左右擺動來阻擋其他玩家降低帶球時球被搶的風險，而檔板我們是參彈珠台的設計，左右各有一個可操控的開關使玩家可以做出把球射出的動作，槌子是懸空作用為檔人並不會碰到球，所以不會有妨礙到射球情況發生。 \n 3.輪盤記分板繪製\xa0 \n \n \n \n \n \n 4.輪盤記分板重點程式\xa0 \n function sysCall_actuation()  --simUI.setLabelText(ui, 30, tostring(sim.getFloatSignal("myVariable")))  result=sim.readProximitySensor(sensor)  if(score1<99)then  if(result>0)then  score2 = score1+1  p= p +72  sim.setJointTargetPosition(right, math.rad(p))  simUI.setLabelText(ui, 30, tostring(score2)) \n sim.setObjectPosition(bubbleRob, -1, initialPosition)  sim.setObjectOrientation(bubbleRob, -1, initialOrientation)  sim.setObjectPosition(bubbleRob2, -1, initialPosition2)  sim.setObjectOrientation(bubbleRob2, -1, initialOrientation2)  sim.setObjectPosition(ball, -1, initialballPosition)  sim.setObjectOrientation(ball, -1, initialballOrientation)  score1=score2  if(p == 720)then  p=0  p2= p2 +72  sim.setJointTargetPosition(left, math.rad(p2))  end  end  else  sim.pauseSimulation()  end end \n 5.玩家控制程式與設置 \n 移動程式 \n # pip install pyzmq cbor keyboard from zmqRemoteApi_IPv6 import RemoteAPIClient import keyboard \n client = RemoteAPIClient(\'2001:288:6004:17:2023:cdb:7:6\', 23000) \n print(\'Program started\') sim = client.getObject(\'sim\') \n # Define the size and position of the cuboid size = [0.1, 0.2, 0.3] position = [0, 0, 0.15] \n sim.startSimulation() \n print(\'Simulation started\') \n def setBubbleRobVelocity(leftWheelVelocity, rightWheelVelocity):  leftMotor = sim.getObject(\'/leftMotor7\')  rightMotor = sim.getObject(\'/rightMotor7\')  sim.setJointTargetVelocity(leftMotor, leftWheelVelocity)  sim.setJointTargetVelocity(rightMotor, rightWheelVelocity) \n while True:  if keyboard.is_pressed(\'up\'):  setBubbleRobVelocity(2.5, 2.5)  elif keyboard.is_pressed(\'down\'):  setBubbleRobVelocity(-2.0, -2.0)  elif keyboard.is_pressed(\'left\'):  setBubbleRobVelocity(-1.0, 1.0)  elif keyboard.is_pressed(\'right\'):  setBubbleRobVelocity(1.0, -1.0)  else:  setBubbleRobVelocity(0.0, 0.0) \n \n 控制程式 \n # pip install pyzmq cbor keyboard from zmqRemoteApi_IPv6 import RemoteAPIClient import keyboard \n client = RemoteAPIClient(\'2001:288:6004:17:2023:cdb:7:6\', 23000) \n print(\'Program started\') sim = client.getObject(\'sim\') \n # Define the size and position of the cuboid size = [0.1, 0.2, 0.3] position = [0, 0, 0.15] \n sim.startSimulation() \n print(\'Simulation started\') left = sim.getObject(\'/left7\') right = sim.getObject(\'/right7\') space = sim.getObject(\'/space7\') \n   while True:  if keyboard.is_pressed(\'a\'):  sim.setJointTargetPosition(left, 1.5)  else:  sim.setJointTargetPosition(left, 0)  if keyboard.is_pressed(\'d\'):  sim.setJointTargetPosition(right, -1.5)  else:  sim.setJointTargetPosition(right, 0)  if keyboard.is_pressed(\'e\'):  sim.setJointTargetPosition(space, -1.5)  elif keyboard.is_pressed(\'q\'):  sim.setJointTargetPosition(space, 1.5)  else:  sim.setJointTargetPosition(space, 0) \n', 'tags': '', 'url': 'pj3.html'}, {'title': '報告', 'text': 'ppt \n \n word', 'tags': '', 'url': '報告.html'}, {'title': '心得', 'text': '\n 40732331：這門課程將其他課堂學得的繪圖技巧應用在這門課程上，也學習使用coppeliasim來製作機器人去作動，在課堂上和同學協調不斷調整整個足球場遊戲，也不斷請教岳檉還有其他同組成員git的相關指令。雖然自己目前仍不成熟，但還會繼續多加去實作來補足自己經驗不足的部分。 \n 41023213：這次參與了模型製作，最難的部分是要符合設計，要調整草圖設計方式，還有組合零件，最後能參與到協同真的很有成就感 \n 41023216： \n 41023218：這學期我比較著重在命令提示字元的指令上，與其他組員「協同」合 作是這學期的一大難題，如何近端git pull同步遠端而不使用重新git clone暴力 解，成為了我鑽研的課題。 \n 41023225： \n 41023237：我在製作程式時，出現了許多困難，雖然程式想法非常簡單，但因為英文能力的不足還有對程式語言的不了解，所以在寫程式時，明明非常簡單，但在找資料和寫法上浪費了很多時間，不過也因此學到很多東西。 \n 41023245：我們這學期使用coppeliasim製作了許多機器人來進行模擬，在其中遇到了許多問題，我們各種嘗試並把它解決了。 \n 41023248：這學期學到了如何製作機器人並使用程式操控，通過不斷的測試與改良做出了具有一些奇特功能的機器人，也學習到了如何分工，使一件事變得更加輕鬆簡單。 \n', 'tags': '', 'url': '心得.html'}, {'title': '會議記錄', 'text': '', 'tags': '', 'url': '會議記錄.html'}, {'title': '共同分工會議', 'text': '共同分工會議 \n \n \n   這邊做第一次開會，先檢討一下要製作這個足球機器人的遊戲，首先分配工作。\n\n    張義聖擅長繪圖，先分配繪圖工作。\n    陳威成共同繪圖作業，車子、然後可能還有機器人的繪圖，並和陳威成一同製作ppt和PDF。\n    郭宥辰可以稍微幫忙畫一點，不過主要製作PDF，ppt的部分也可以幫忙，還有可以再幫忙一些比較簡單的繪圖部分，數字號碼，輔助他們兩個做好。\n    陳岳檉可以負責網站的維護，以前pj1或pj2，基本上網站都是陳岳檉在維護，主要我們PJ3的網站維護，就是先給陳岳檉。而網站維護會的話，程式也會一點，也可以輔助黃祈瑋幫忙一些做程式的部分。\n    黃祈瑋做總體程式，全部的計分板等等，程式全部都給黃祈瑋，並提供一些模型的點子給畫圖的組員去製作。\n    劉于綸會製作模型的外型，比如想畫怎樣的，就提供點子給繪圖組，然後再幫忙畫一些。然後大家圖畫完，程式也寫完，之後要放入那個場景，黃祈瑋就需要先把場景的維護做好。 \n    蔡弦霖先幫忙跟劉于綸做場景維護，蔡弦霖對那個車子的設計有有些概念和想法，也可以幫忙製作。\n    黃政憲會繪圖，可以和張義聖去做最多的繪圖工作，就是比較難的部分，或是比較複雜的，就交給兩位先去畫。\n    目前分配工作就先到這，下一次開會就是劉于綸和蔡弦霖設計出來的東西，然後畫圖的人去分配工作。黃祈瑋跟陳岳檉會討論出程式的寫法，到目前的工作就先分配到這邊。\n\n \n', 'tags': '', 'url': '共同分工會議.html'}, {'title': '繪圖會議', 'text': '繪圖會議 \n \n \n \n   我們今天要說明討論的是球場跟球員的設計理念，我們的設計理念就是盡量簡單，球場的設計是按照老師給的規格下去製作在稍微做一點小細節改變，球門幫他新增一個感應器，在製作一個圍牆讓球跟球員不會跑出去，球員則是用原本泡泡機器人的本體，去加以改裝出新的能讓它不只是會前進跟後退，然後球員的部分，我們幫他們加了兩個檔板讓我們的機器人不只是會用身體去推球還可以用那兩個檔板把球射出去，還幫他加了槌子，讓他在給敵對的機器人追擊時有保護球的能力，並且做到在追擊敵對機器人時給予干擾。 \n', 'tags': '', 'url': '繪圖會議.html'}, {'title': '場地與玩家設計會議', 'text': '場地與玩家設計會議 \n \n \n \n   我們今天要說明討論的是球場跟球員的設計理念，我們的設計理念就是盡量簡單，球場的設計是按照老師給的規格下去製作在稍微做一點小細節改變，球門幫他新增一個感應器，在製作一個圍牆讓球跟球員不會跑出去，球員則是用原本泡泡機器人的本體，去加以改裝出新的能讓它不只是會前進跟後退，然後球員的部分，我們幫他們加了兩個檔板讓我們的機器人不只是會用身體去推球還可以用那兩個檔板把球射出去，還幫他加了槌子，讓他在給敵對的機器人追擊時有保護球的能力，並且做到在追擊敵對機器人時給予干擾。。 \n', 'tags': '', 'url': '場地與玩家設計會議.html'}, {'title': '程式設計會議', 'text': '\n 程式設計會議文字稿 \n \n   我這邊齒輪程式我給它導入一個數學的模組，數學模組的作用就是這一段，這一段是軸的位置，然後因為我要讓它轉固定角度，但是這個位置原本的設定是弧度，但是我弧度換角度那個π的計算非常難算，所以我給它導入一個數學模組把原本的弧度，框框裡面就是放角度。\n然後這邊就是球進門之後偵測到這個偵測器，有偵測到東西的時候，所有角都會回到原本的預設位子這樣子，然後我這邊的原理非常簡單，就是我這裡設置一個p值跟一個p2的值，p值就是個位數的，p2值就是十位數的，然後這邊就很簡單就是720就是轉了兩圈，720就是小齒輪轉了兩圈、大齒輪轉一圈，當p2轉兩圈的時候就代表它的值超過99，它就會停止，這邊是p會等於p+72，就是每執行偵測到一次的時候，p的值就會增加72，也就是說，它可能原本是0，增加72就是1，再增加72就是2這樣子，基本上齒輪的程式沒什麼特別的，就是很簡單的一個概念。\n那...來看一下我們機器人的程式，我們有兩個，一個是移動，那我們移動的部分基本上跟原本的pj2的程式幾乎一模一樣，然後這裡是ip，這裡就是你有連線到它就會說話，然後這裡是sim的文件的東西，這邊就是導入模組，這是ipv6的。\n這邊的程式最基本的東西就是設定它的速度就是這個東西，這個東西設定成這個和這個東西，這個東西就是它的轉速，這是它設定它的轉速，然後右邊就是右邊的轉速，然後由這邊來控制轉速，就是原本要打兩行，一個左輪一個右輪，現在變成都只要打這一行這樣子，那...我們的移動程式就跟pj2的機器人幾乎一模一樣，就比較簡單，可能有改一點基本的速度。\n然後控制的部分是，控制的部分就是這裡是因為這裡我們沒有推球裝置，然後我們的推球不是有兩片手板跟這個A跟D，就是可以控制左手推跟一個右手推這樣子，然後這裡就是用位子的概念去控制，那...程式基本上就是這樣，很簡單。有什麼問題嗎？哪個部分有聽不懂的？\nOK都聽得懂。\n那...有沒有想要改的？就是覺得機器人可以怎麼移動會改得更好？有沒有想法？沒有？我們機器人這邊是我們之後還要寫一個槌子的程式，那我們這邊槌子的程式也基本上跟這個擋板的程式基本上一模一樣，然後...我們基本上沒有什麼問題啦~就程式基本上就是做一些簡單的改動，然後就可以做出想要的功能，基本上就是這樣。 \n \n 程式問題1 : 程式控制主軸如何精確的控制轉的角度？ \n \n 程式回答1：主軸位置的數值是弧度，所以無法利用計算的方式控制在36度，所以我利用了math來轉換，只要在math.rad()中填入角度他就會幫我轉成弧度來控制。 \n \n 程式問題2：if....elif....else 和while true：的使用方式？ \n \n 程式回答2 : 如果程式中\nwhile true :\nif a = 1 :\nprint(1)\nelif a = 1:\nprint(2)\nelse:\nprint(3)\n這種時候，如果a為1那就會說1，但如果a是2就會說2，但如果if 和elif的條件衝到，將會先執行if的，而else則就是在上述的條件都不成立時，則就會執行else下的指令，只要將這些條件放在while true 下，程式就會不段執行，不會因為執行一次後就停止，是迴圈的一種。 \n', 'tags': '', 'url': '程式設計會議.html'}, {'title': 'Downloads', 'text': 'Game \n 地圖 \n 玩家 \n 流星錘 \n 輪盤和驅動齒輪檔案 \n 操作程式 \n 移動程式 \n 數字圖檔', 'tags': '', 'url': 'Downloads.html'}, {'title': 'Brython 程式環境', 'text': '亂數 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n', 'tags': '', 'url': 'Brython 程式環境.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n \n \n \n \n \n \n STL part viewer \n \n \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}]};
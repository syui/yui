$(function() {
	var prompt = "[[b;#87cefa;]root][[b;#FFFF00;]@yui.syui.ai] ~$ ";
	var command_all = ["ai"];

	var ascii_ai = "\n\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⣁⠉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠋⣉⣉⠡⠤⠤⠤⠤⠤⠤⠤⠤⠬⠤⣁⣉⡉⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢉⣤⡖⠚⣉⣡⣤⣦⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣴⣤⣤⠉⠑⣦⣌⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣾⣿⣦⣄⣅⣌⣄⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣶⣾⣿⣿⣁⣘⡙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢃⣤⣨⣿⡿⡿⠟⠟⠛⠻⠚⠛⠛⠛⠛⠛⠛⠋⡋⡋⠛⠛⠉⠉⠼⠿⠿⠿⠿⠿⠷⢶⢤⣈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢋⡡⠞⠛⣉⣉⣤⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣦⣦⣦⣦⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⢁⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠋⡉⣉⣉⣁⣨⣀⣅⣉⣉⢉⠛⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⣁⡤⣴⣲⢯⢯⡯⣗⡯⣞⡾⣺⣺⢵⢯⢯⣟⢶⢦⣤⣀⡉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⣠⣔⡯⣗⡯⣗⡯⡯⣟⣞⣗⡯⣗⡯⣗⡯⡯⣟⣽⣺⢽⢽⣺⣳⢯⣟⡦⣌⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⣠⣻⣺⣺⢽⣳⢯⣗⡯⡯⣗⡯⡾⣝⣗⡯⣗⡯⡯⣗⣗⡯⣟⣽⣺⣺⢽⣺⢽⣳⣻⢦⣈⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢠⣺⣳⢽⣺⣺⢽⣺⢽⣺⢽⣫⣗⡯⡯⣗⣗⡯⣗⡯⡯⣗⣗⡯⣗⣗⡯⡾⣽⣺⢽⡽⣾⣽⣺⢵⡀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⣔⣟⣞⡾⣽⣺⣺⢽⣺⢽⣺⢽⣺⣺⢽⣫⣗⣗⡯⣗⡯⡯⣗⣗⡯⣗⣗⡯⡯⣗⡯⣟⣞⣗⡿⣾⣽⢽⢦⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⡮⣗⡯⡾⣝⡷⣽⣺⢽⣺⢽⣺⢽⣺⣺⢽⣺⣺⢵⢯⣗⡯⡯⣗⣗⡯⣗⣗⡯⡯⣗⡯⣗⣟⡾⣽⣻⣿⣯⣟⢷⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⡾⣝⣗⡯⡯⣗⡯⣗⡯⣟⡾⣽⣺⢽⣺⣺⢽⣺⣺⢽⢽⣺⢽⣫⣗⣗⡯⣗⣗⡯⡯⣗⡯⣗⡷⣻⣗⡷⣿⣟⣿⣽⣳⠈⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⣼⢽⣳⢗⡯⡯⣗⡯⣗⡯⣗⡯⣗⡯⠛⣞⡾⣽⣺⣺⢽⢽⣺⢽⣺⣺⢵⢯⣗⣗⡏⠙⣗⡯⣗⣯⢯⣷⢿⣽⣿⣿⡾⡽⣇⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢸⣳⢽⣺⢽⢽⣫⣗⡯⣗⡯⣗⣯⡓⢡⡂⢵⢯⣗⡯⡾⣽⢽⣺⢽⣺⣺⢽⢽⣺⡞⢀⢇⠸⣽⣳⢽⣯⢿⣿⣿⣽⣷⣿⢯⢿⠀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣞⡾⣽⣺⢽⢽⣺⣺⢽⣳⢯⣗⠇⢠⣿⠆⢸⢽⣺⢽⢽⣳⣻⣺⢽⣺⣺⢽⢽⡺⠁⡬⣿⡀⢳⡽⡽⣾⡯⢿⣯⣿⣽⣿⣻⢽⡃⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠠⣗⡯⣗⡯⣟⣽⣺⣺⢽⣺⢽⡺⢀⣿⣿⢅⠈⣟⡾⣽⢽⣺⢵⢯⣻⣺⣺⢽⢽⠃⡰⣽⣿⡇⢸⡽⡽⣿⢝⣽⣿⣿⣺⣿⡯⣯⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣳⢯⣗⡯⣗⣗⡯⡾⣽⣺⢽⠂⣸⣿⣾⡕⡀⢗⡯⣗⣟⡾⡽⣽⣺⣳⢽⢽⠃⢰⣱⣿⣷⡇⢸⡯⣟⠟⠀⣿⡿⣞⣾⣻⣽⡳⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣺⢽⣺⢽⣳⢗⡯⡯⣗⡯⡏⢀⣿⢿⣾⣗⠆⠸⣽⡳⣗⡯⡯⣗⣗⡯⣯⠏⢠⢣⣿⣿⣾⡇⢸⢯⠏⣰⠀⣿⣻⣳⣳⣿⣺⢽⠅⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠸⣺⢽⣺⢽⣺⢽⢽⣫⢷⠉⡇⠰⣿⣿⣻⣽⣎⠀⢗⡯⡗⢙⣽⡳⣗⡯⡏⢀⣗⣿⣿⣷⣿⠂⣺⠋⣠⣿⠀⣿⣺⢵⣫⣿⣺⢽⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠈⣗⣟⡾⣽⣺⢽⢽⣺⠍⠀⡇⠘⣉⣤⣬⣈⣑⣅⠘⣽⠂⠘⣮⢯⣗⠏⢠⡟⣉⣡⠤⢤⠄⢠⠃⢴⡟⣯⠀⣗⡯⠟⡾⣗⡯⡇⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⢸⣳⢯⣗⡯⣟⣽⡺⢀⠃⠀⠸⠋⢡⢡⡉⠻⣷⡄⠸⢀⡆⢹⣳⠃⣴⣿⣿⠋⣠⠐⡔⠀⠂⢳⡄⢰⣟⠀⠉⣠⣦⠘⣷⡻⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢡⡀⢯⣗⣗⡯⣗⣷⡃⠀⣼⠀⠀⠓⠀⠓⢽⠄⢹⣿⡄⢐⣧⠘⢁⣾⣿⣯⡯⢐⢌⠀⠁⣜⠆⢸⣿⡀⢟⠀⢨⣄⠙⡇⢹⠃⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣌⠣⡈⢾⢵⢯⣗⢷⡃⢰⣿⡧⠈⣟⡀⠀⡸⡅⢸⡿⣿⣦⣹⣶⣻⣿⣷⣿⣇⠨⣫⢀⢀⢎⠃⣼⡿⣇⡾⠀⡢⠘⣨⠇⠈⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡐⠈⢫⣟⢾⢽⡂⢹⣿⣿⡄⠱⢕⢵⠝⢀⣾⣿⣿⣻⣿⣻⣿⣻⣾⣟⣿⣆⠑⡕⠗⣁⣴⣿⡿⣿⠃⠄⣾⣵⡟⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠫⣟⡽⡃⢸⣿⣾⣿⡷⣾⣴⣻⡿⣯⣷⣿⣿⣻⣿⣽⣿⣟⣿⣻⣿⣟⣷⡿⣿⣽⣾⣿⡏⢠⠴⠟⠁⠄⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡈⢯⢧⠈⢿⣿⣾⣿⣿⣾⣿⢿⣿⣟⣿⣾⣿⣼⣿⣾⢿⣻⣿⣽⣿⣻⣿⣿⣻⣯⡿⠀⡄⡔⡔⠅⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠙⢆⠈⠻⣾⣿⣾⢿⣾⣿⣿⣽⠻⢷⣿⣻⣾⠿⠟⢿⣻⣽⣾⣿⢿⣾⡿⠋⡁⡜⠌⠈⣠⠪⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⡂⠀⣤⡈⠻⣾⣿⢿⣷⡿⣯⣷⣤⣤⣤⣤⣶⣾⣿⣿⢿⣻⠽⠛⢉⢠⠸⠈⡠⣰⠀⣿⡀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⠀⢨⣗⡯⣖⡄⢈⠉⠓⠻⠿⢿⣟⣿⣻⣿⠽⠟⠞⠋⢉⢠⠀⡰⠑⢁⢰⠀⡯⣪⠀⣳⣇⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠨⠀⣻⢮⡯⢺⠀⢜⠈⡊⢐⢶⢔⡤⡤⣤⢤⢖⣖⢷⠅⢸⠀⠐⢁⡴⡇⡘⢠⡫⡎⡇⢸⣺⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⡯⣗⠇⡪⠀⡃⠠⡃⠨⣿⣷⣯⣿⣾⣽⣷⣯⣿⠂⠀⡠⠀⣻⣺⡇⠀⢸⡂⢝⢦⠐⣗⣧⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⣜⠀⡯⡿⠀⠆⢐⠁⢜⠌⢨⣿⣾⣿⣽⣯⣿⣷⣿⢿⡁⢌⠐⠀⣳⣳⡃⠀⡪⡇⢸⢕⠄⢳⢽⡆⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⡰⢱⠀⡯⡏⠨⠂⢀⡈⢈⡄⢸⣷⣿⣷⢿⣯⣷⣿⣾⣿⣆⠙⠅⠀⣞⣾⠀⢀⢯⡢⠘⣎⢇⠘⡽⣽⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⣰⡹⠀⢯⠇⢘⠀⠍⣴⣿⣤⣿⡿⣷⣿⢿⣻⣽⣷⣿⡿⣿⣷⡂⢀⣗⣿⠀⠰⠣⢯⡀⢗⡝⡄⠹⣳⢧⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢁⠔⢁⠞⣈⣴⠀⣫⠃⡐⢀⢞⣿⡿⣾⣟⣿⣿⣽⣿⡿⣟⣿⣾⡿⣿⣽⡂⢐⣗⡗⢀⣶⣦⣦⣤⣄⣉⠘⠀⠹⡽⣆⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⡠⠃⡔⢁⣼⣿⡿⠀⢸⠀⡂⢸⢸⣿⡿⣟⣿⢿⣞⡿⣾⣿⢿⣟⣷⢿⣿⣷⠁⢰⢯⡇⢰⣿⣯⣿⣟⣿⡿⣿⣷⣤⣈⠛⢆⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⠊⡠⢊⣰⣿⣿⠟⣰⠀⢸⠀⠀⡎⣾⠿⠟⠛⣉⢉⠚⢮⢿⣾⢿⣝⠮⢋⣠⣈⠂⣸⢽⠀⢼⣟⣯⣷⣿⣟⣿⣿⣽⣿⣿⡷⡌⢣⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⡔⢁⡔⢡⣾⣿⣿⣧⡐⢿⠀⣞⠀⠀⣏⢦⡶⣞⣿⣽⣳⣳⣽⣿⢿⣻⣾⣴⣳⣷⣿⠀⣺⡝⠀⣽⣿⢿⣻⣽⣿⣽⣾⡿⣯⣿⣿⣿⡀⢳⡀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠎⢠⠎⣠⣿⣿⣿⣿⣿⣿⣦⠀⡯⠀⠐⠧⠻⠛⠛⢋⢋⠋⠙⠛⠿⣿⢿⣷⡿⣿⣽⡿⠀⣷⠃⠀⣿⡿⣿⡿⣿⣽⣯⣷⣿⣿⡿⣿⣻⡇⢀⠹⣆⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\
";

		axios.get('https://card.syui.ai/json/card.json')
			.then(function (response) {
				all_card = JSON.stringify(response.data,null,"\t");
			})

	function print_slowly(term, paragraph, callback) {
		var foo, i, lines;
		lines = paragraph.split("\n");
		term.pause();
		i = 0;
		foo = function(lines) {
			return setTimeout((function() {
				if (i < lines.length - 1) {
					term.echo(lines[i]);
					i++;
					return foo(lines);
				} else {
					term.resume();
					return callback();
				}
			}), 100);
		};
		return foo(lines);
	}

	function require_command(command_regex, terminal_history) {
		var executed = true;
		$.each(terminal_history, function(index, value) {
			if (command_regex.test(value)) {
				executed = true
			}
		});
		return executed;
	}

	function interpreter(input, term) {
		var command, inputs;
		inputs = input.split(/ +/)
		command = inputs[0];
		if (inputs[0] === 'ai') {
			print_slowly(term, ascii_ai);
		} else if (inputs[0] === 'user') {
			if (inputs[1] != undefined) {
				user_search(inputs[1]);
			} else {
				term.echo("user $id");
			}
		} else if (inputs[0] === 'card') {
				term.echo(all_card);
		} else {
			term.error(command + " is not a valid command");
		}
	}

function bash(inputs, term) {
	var argument, echo, insert;
	echo = term.echo;
	insert = term.insert;
	if (!inputs[1]) {
		//return console.log("none");
	} else {
		argument = inputs[1];
		if (/^\.\./.test(argument)) {
			return echo("-bash: cd: " + argument + ": Permission denied");
		} else {
			return echo("-bash: cd: " + argument + ": No such file or directory");
		}
	}
}

$('#terminal').terminal(interpreter, {
	prompt: prompt,
	name: 'test',
	greetings: "",
	exit: false,
	height: 450,
	onInit: function(term) {
			//print_slowly(term, ascii_ai);
	},
	completion: function(term, string, callback) {
		var t = $(term[0]).text();
		if (t.match(/none/)) {
			term.clear();
		} else {
			callback(command_all);
			term.history().clear();
		}
	},
	tabcompletion: true
});
});

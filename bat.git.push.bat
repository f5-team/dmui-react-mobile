
echo start

echo pull start
git pull
echo pull end

echo add start
git add -A .
echo add end

echo;
echo commit local master
git commit -m "update case"

echo;
echo push origin master
git push origin master

echo;
echo end
echo;

pause
clear
clc

% filename1 = 'Breathing_1.mp3';
% filename2 = 'Breathing_2.mp3';
% filename3 = 'Breathing_3.mp3';

[y1, Fs] = audioread("Breathing_1.mp3"); % 18 seconds of breathing
y1 = y1';
l = length(y1);
x = [0 : l - 1];

% figure(1);
% plot(x, y1);

sr = 4800;
n = 2;

y2 = hampel(y1);
figure(1);
plot(x, y2);

max = 1;
diff = [0];

while any(diff < Fs)
    y2 = envelope(y2, sr, 'peak');
    [pks, locs] = findpeaks(y2);

    locs2 = [locs(2:end), 0];
    diff = abs(locs2 - locs);
%     figure(n);
%     plot(x, y2);
%     n = n + 1;
end

figure(n);
plot(x, y2);



% windowSize = 50;
% b = (1/windowSize)*ones(1,windowSize);
% a = 1;
% figure(2);
% y3 = filter(b, a, y2);
% plot(x, y3);

% f = Fs * (0 : (l / 2)) / l;
% p1 = fft(y);
% p2 = p1(1 : l / 2 + 1);
% 
% figure(2);
% plot(f, p2);
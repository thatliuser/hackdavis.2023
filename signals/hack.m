% Made with love in HackDavis 2023: Drowsy

clear
clc

[y1, Fs] = audioread("sleep.mp3");
y1 = y1';
l = length(y1);
x = [0 : l - 1];
sr = Fs;
n = 2;
y2 = hampel(y1);
p = zeros(1, length(y1));
hold on;
figure(1);
plot(x, y2);
ylim([-0.005, 0.005]);

for I = 1 : 60 * Fs : l
    cap = Fs * 60 * I;
    cap = min(cap, l);

    s = y2(I : cap);
    diff = 0;

    while any(diff < Fs)
        s = envelope(s, sr, 'peak');
        s = hampel(s);
        [~, locs] = findpeaks(s);
        locs2 = [locs(2:end), 0];
        diff = abs(locs2 - locs);
%         figure(n);
%         plot(x, y2, x, -y2, 'LineWidth', 0.25 * (n + 1));
        n = n + 1;
        p(I : cap) = s;
    end
end

hold off;
figure(n);
plot(x, p);
ylim([0, 0.005]);
n = n + 1;

[pks, locs] = findpeaks(p);
locs3 = [locs(2:end),0];
i2 = 2;
diff = (locs3 - locs) / Fs;
breathRate = 1./diff;
y3 = breathRate(1:end-1);
figure(n);
x2 = [1:length(y3)];
plot(x2,y3);

figure(30)
plot(length(y3), envelope(y3, 100, 'rms'));
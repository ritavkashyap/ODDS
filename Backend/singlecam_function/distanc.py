
import numpy as np
import cv2
from collections import deque
buffer = 128
dist = 0
focal = 960
pixels = 30
width = 5
pts = deque(maxlen=buffer)
def get_dist(rectange_params,image):
 
    pixels = rectange_params[1][0]
    print(pixels)
   
    dist = (width*focal)/pixels
   
    image = cv2.putText(image, 'Distance from Camera in CM :', org, font,  1, color, 2, cv2.LINE_AA)

    image = cv2.putText(image, str(dist), (110,50), font,  fontScale, color, 1, cv2.LINE_AA)

    return image
def traj(image) :
    for i in range (1,len(pts)) :
        if pts[i - 1] is None or pts[i] is None:
            continue
        thickness = int(np.sqrt(buffer / float(i + 1)) * 2.5)
        cv2.line(image, pts[i - 1], pts[i], (0, 0, 255), thickness)
    return image
cap = cv2.VideoCapture(0)

kernel = np.ones((3,3),'uint8')
font = cv2.FONT_HERSHEY_SIMPLEX 
org = (0,20)  
fontScale = 0.6 
color = (0, 0, 0) 
thickness = 2


cv2.namedWindow('Object Dist Measure ',cv2.WINDOW_NORMAL)
cv2.resizeWindow('Object Dist Measure ', 700,600)


while True:
    ret, img = cap.read()
    hsv_img = cv2.GaussianBlur(img,(11,11),0)
    hsv_img = cv2.cvtColor(hsv_img,cv2.COLOR_BGR2HSV)
    
    lower = np.array([90, 50, 50])
    upper = np.array([130, 255, 255])
    mask = cv2.inRange(hsv_img, lower, upper)
     
    d_img = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel,iterations = 5)

    cont,hei = cv2.findContours(d_img,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
    cont = sorted(cont, key = cv2.contourArea, reverse = True)[:1]
    cx=0
    cy=0
    for cnt in cont:
       
        if (cv2.contourArea(cnt)>100 and cv2.contourArea(cnt)<306000):


            rect = cv2.minAreaRect(cnt)
            M = cv2.moments(cnt)

            cx = int(M['m10']/M['m00'])
            cy = int(M['m01']/M['m00'])

            box = cv2.boxPoints(rect) 
            box = np.int0(box)
            cv2.drawContours(img,[box], -1,(255,0,0),3)
            
            cv2.circle(img, (cx, cy), 7, (0, 0, 255), -1)
            cv2.putText(img, "center", (cx - 20, cy - 20),cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 2)
            img = get_dist(rect,img)
            pts.appendleft((cx,cy))
            img = traj(img)
	        
    cv2.imshow('Object Dist Measure ',img)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()



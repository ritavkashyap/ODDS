import sys
import cv2
import numpy as np
import time
import imutils
from matplotlib import pyplot as plt
# from collections import deque

# Function for stereo vision and depth estimation
import triangulation as tri
import calibration
import terminalCoordinates as tc

# Mediapipe for face detection
import mediapipe as mp
import time

mp_facedetector = mp.solutions.face_detection
mp_draw = mp.solutions.drawing_utils

# Open both cameras
cap_right = cv2.VideoCapture(0, cv2.CAP_DSHOW)                    
cap_left =  cv2.VideoCapture(2, cv2.CAP_DSHOW)


# Stereo vision setup parameters
frame_rate = 120   #Camera frame rate (maximum at 120 fps)
B = 7               #Distance between the cameras [cm]
f = 4              #Camera lense's focal length [mm]
alpha = 60       #Camera field of view in the horisontal plane [degrees]


# buffer = 40
# pts = deque(maxlen=buffer)

# def drawCross(frame, point, color, size):
#     x, y = point.x, point.y
#     cv2.line(frame, (x - size, y - size), (x + size, y + size), color, 2)
#     cv2.line(frame, (x - size, y + size), (x + size, y - size), color, 2)

# def Detect_Object(frame):
#     global nTrackCount

#     if nTrackCount < nTrackFrames:
#         boundRect1[nTrackCount] = (hxx, hyy)
#     nTrackCount += 1

#     for iTrack in range(nTrackCount):
#         Pt = cv2.Point()
#         Pt.x = boundRect1[iTrack].x
#         Pt.y = boundRect1[iTrack].y
#         # Drawing Cross (X) for tracking
#         drawCross(frame, Pt, cv2.Scalar(255, 255, 255), 5)  # Corrected

#     if nTrackCount == nTrackFrames:
#         nTrackCount = 0


# Main program loop with face detector and depth estimation using stereo vision
with mp_facedetector.FaceDetection(min_detection_confidence=0.7) as face_detection:
    while(cap_right.isOpened() and cap_left.isOpened()):
        # print("running")

        succes_right, frame_right = cap_right.read()
        succes_left, frame_left = cap_left.read()

    ################## CALIBRATION #########################################################

        frame_right, frame_left = calibration.undistortRectify(frame_right, frame_left)

    ########################################################################################

        # If cannot catch any frame, break
        if not succes_right or not succes_left:                    
            break

        else:

            start = time.time()
            
            # Convert the BGR image to RGB
            frame_right = cv2.cvtColor(frame_right, cv2.COLOR_BGR2RGB)
            frame_left = cv2.cvtColor(frame_left, cv2.COLOR_BGR2RGB)

            # Process the image and find faces
            results_right = face_detection.process(frame_right)
            results_left = face_detection.process(frame_left)

            # Convert the RGB image to BGR
            frame_right = cv2.cvtColor(frame_right, cv2.COLOR_RGB2BGR)
            frame_left = cv2.cvtColor(frame_left, cv2.COLOR_RGB2BGR)


            ################## CALCULATING DEPTH #########################################################

            center_right = 0
            center_left = 0
            
            if results_right.detections:
                for id, detection in enumerate(results_right.detections):
                    mp_draw.draw_detection(frame_right, detection)

                    bBox = detection.location_data.relative_bounding_box

                    h, w, c = frame_right.shape
                    # pts.appendleft(c)
                
                    boundBox = int(bBox.xmin * w), int(bBox.ymin * h), int(bBox.width * w), int(bBox.height * h)



                    center_point_right = (boundBox[0] + boundBox[2] / 2, boundBox[1] + boundBox[3] / 2)
                                      
                    cv2.putText(frame_right, f'{int(detection.score[0]*100)}%', (boundBox[0], boundBox[1] - 20), cv2.FONT_HERSHEY_SIMPLEX, 2, (0,255,0), 2)


            if results_left.detections:
                for id, detection in enumerate(results_left.detections):
                    mp_draw.draw_detection(frame_left, detection)

                    bBox = detection.location_data.relative_bounding_box

                    h, w, c = frame_left.shape

                    boundBox = int(bBox.xmin * w), int(bBox.ymin * h), int(bBox.width * w), int(bBox.height * h)

                    center_point_left = (boundBox[0] + boundBox[2] / 2, boundBox[1] + boundBox[3] / 2)

                    cv2.putText(frame_left, f'{int(detection.score[0]*100)}%', (boundBox[0], boundBox[1] - 20), cv2.FONT_HERSHEY_SIMPLEX, 2, (0,255,0), 2)




            # If no ball can be caught in one camera show text "TRACKING LOST"
            if not results_right.detections or not results_left.detections:
                cv2.putText(frame_right, "TRACKING LOST", (75,50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255),2)
                cv2.putText(frame_left, "TRACKING LOST", (75,50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255),2)

            else:
                # Function to calculate depth of object. Outputs vector of all depths in case of several balls.
                # All formulas used to find depth is in video presentaion
                depth = tri.find_depth(center_point_right, center_point_left, frame_right, frame_left, B, f, alpha)
                lat , long = tc.get_point_at_distance(24.763048, 92.796842, depth/100, 90)
                # print(lat," is the lat",long)
                cv2.putText(frame_right, "lat: " + str(round(lat,8)) +"long: " + str(round(long, 8)), (0,80), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0,255,0),3)


                # cv2.putText(frame_right, "Distance: " + str(round(depth,1)), (50,50), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0,255,0),3)
                
                cv2.putText(frame_left, "Distance: " + str(round(depth,1)), (50,50), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0,255,0),3)
                # Multiply computer value with 205.8 to get real-life depth in [cm]. The factor was found manually.
                # print("Depth: ", str(round(depth,1)))



            end = time.time()
            totalTime = end - start

            fps = 1 / totalTime
            #print("FPS: ", fps)

            cv2.putText(frame_right, f'FPS: {int(fps)}', (20,450), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0,255,0), 2)
            cv2.putText(frame_left, f'FPS: {int(fps)}', (20,450), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0,255,0), 2)                                   


        #     for i in range(1, len(pts)):
		# # if either of the tracked points are None, ignore
		# # them
        #         if pts[i - 1] is None or pts[i] is None:
        #             continue
        #     # otherwise, compute the thickness of the line and
        #     # draw the connecting lines
        #         thickness = int(np.sqrt(buffer/ float(i + 1)) * 2.5)
        #         cv2.line(frame_right, pts[i - 1], pts[i], (0, 0, 255), thickness)









            # Show the frames
            cv2.imshow("frame right", frame_right) 
            cv2.imshow("frame left", frame_left)


            # Hit "q" to close the window
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break


# Release and destroy all windows before termination
cap_right.release()
cap_left.release()

cv2.destroyAllWindows()
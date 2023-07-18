import cv2

def trajectoryPlot(frame , trajectory_points = [] ) :
    # trajectory_points saves the centre points of the bounding box for drawing the trajectory line

    if len(trajectory_points) > 1:
        for i in range(1, len(trajectory_points)):
            cv2.line(frame, tuple(map(int, trajectory_points[i-1])), tuple(map(int, trajectory_points[i])), (0, 0, 255), 2)
            print(trajectory_points[i-1], trajectory_points[i])
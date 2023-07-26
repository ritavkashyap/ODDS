
from alexnet import *

vc = cv2.VideoCapture(0)
# vc = cv2.VideoCapture(1,cv2.CAP_DSHOW)
while True :
    ret, frame = vc.read()
    if not ret:
            print("Error: Could not capture frame.")
            break
    
    frame_resized = cv2.resize(frame, (227, 227))  
    frame_resized = frame_resized.astype(np.float32) / 255.0
    frame_resized = (frame_resized - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]
    frame_tensor = torch.tensor(frame_resized.transpose(2, 0, 1)).unsqueeze(0).to(device)
    frame_tensor = frame_tensor.float()
        # Perform inference with the model
    with torch.no_grad():  # Disable gradient calculation during inference
        model.eval()  # Set the model to evaluation mode
        predicted_classes, predicted_bbox = model(frame_tensor)

        # Get the predicted class and confidence
    _, predicted_class = torch.max(predicted_classes, 1)
    predicted_label = class_labels[predicted_class.item()]
    predicted_confidence = torch.softmax(predicted_classes, 1)[0][predicted_class].item()
    overlay_text = f"Class: {predicted_label}, Confidence: {predicted_confidence:.2f}"


    frame = cv2.resize(frame,(480,480))
    fheight , fwidth , _ = frame.shape
    predicted_bbox_coords = predicted_bbox.squeeze().cpu().numpy().astype(np.float32)
    xmin, ymin, width, height = predicted_bbox_coords
    scale_x = fwidth / 227
    scale_y = fheight / 227
    xmin*= scale_x
    width *= scale_x
    ymin *= scale_y
    height *= scale_y
    xmax = xmin + width
    ymax = ymin + height
    
    # Draw bounding box
    
    print(fheight,fwidth)
    
    cv2.rectangle(frame, (int(xmin), int(ymin)), (int(xmax), int(ymax)), (0, 255, 0), 2)
    cv2.putText(frame, overlay_text, (0, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)


#     predicted_bbox_coords = predicted_bbox.squeeze().cpu().numpy()
#     xmin, ymin, width, height = predicted_bbox_coords
#     xmax = xmin + width
#     ymax = ymin + height
#     cv2.rectangle(frame, (int(xmin), int(ymin)), (int(xmax), int(ymax)), (0, 255, 0), 2)
    # Show the frame with overlay
    cv2.imshow("Video Feed", frame)

    # Press 'q' to quit the loop and close the video feed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

vc.release()








# test_image_path = "test.jpg"
# test_image = Image.open(test_image_path).convert('RGB')
# test_image_tensor = transform(test_image).unsqueeze(0).to(device)

# with torch.no_grad():  # Disable gradient calculation during inference
#     model.eval()  # Set the model to evaluation mode
#     predicted_classes, predicted_bbox = model(test_image_tensor)

# # print(predicted_classes)

# _, predicted_class = torch.max(predicted_classes, 1)
# predicted_label = class_labels[predicted_class.item()]
# predicted_confidence = torch.softmax(predicted_classes, 1)[0][predicted_class].item()

# image = cv2.imread("test.jpg")

# predicted_bbox_coords = predicted_bbox.squeeze().cpu().numpy().astype(np.float32)
# xmin, ymin, width, height = predicted_bbox_coords
# xmax = xmin + width
# ymax = ymin + height
# cv2.rectangle(image, (int(xmin), int(ymin)), (int(xmax), int(ymax)), (0, 255, 0), 2)

# cv2.imshow("new tank",image)
# cv2.waitKey(0)
# print(predicted_label,predicted_confidence)
import lib
import torch
from torchvision import transforms
from torch.utils.data import DataLoader

device = "cuda" if torch.cuda.is_available() else "cpu"
num_batch = 1
transforms = transforms.ToTensor()

def pred(data):
    dataset = lib.Mydataset(img=data, transforms=transforms)
    dataloader = DataLoader(dataset=dataset, batch_size=num_batch, shuffle=False)
    model = lib.CNN().to(device)
    model.load_state_dict(torch.load('model.pth'))
    model.eval()

    with torch.no_grad():
        for inputs, labels in dataloader:
            inputs = inputs.to(device)
            labels = labels.to(device)
            outputs = model(inputs)
            pred = outputs.argmax(1)
        # guitar=0, bass=1, drums=2
            if pred.item() == 0:
                return "ギタリストおおおおお!!!!"
            elif pred.item() == 1:
                return "ベーシストおおおおおお!!!。"
            else:
                return "ドラマーだあ"
